import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavigationButtonComponent } from '../navigation-button/navigation-button.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

interface FormStep {
  key: string;
  label: string;
  type: string;
  placeholder: string;
  validators: any[];
}

export interface RegistrationData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-init-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    NavigationButtonComponent,
    ProgressBarComponent
  ],
  templateUrl: './init-form.component.html',
  styleUrl: './init-form.component.scss'
})
export class InitFormComponent {
  private formBuilder = inject(FormBuilder);
  
  // Output event cuando el formulario se complete exitosamente
  formCompleted = output<RegistrationData>();
  
  registerForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required]
  });
  
  currentStep = 0;

  steps: FormStep[] = [
    {
      key: 'name',
      label: '¿Cómo te llamas?',
      type: 'text',
      placeholder: 'Escribe aquí tu nombre completo',
      validators: [Validators.required, Validators.minLength(3)]
    },
    {
      key: 'email',
      label: '¿Cuál es tu email?',
      type: 'email',
      placeholder: 'Indica el email con el que accederás a tu album de recuerdos',
      validators: [Validators.required, Validators.email]
    },
    {
      key: 'password',
      label: 'Tu contraseña',
      type: 'password',
      placeholder: 'Crea una contraseña segura de mínimo 8 caracteres',
      validators: [Validators.required, Validators.minLength(8)]
    },
    {
      key: 'confirmPassword',
      label: 'Confirma tu contraseña',
      type: 'password',
      placeholder: 'Escribe de nuevo tu contraseña',
      validators: [Validators.required]
    },
  ];

  get currentStepData(): FormStep {
    return this.steps[this.currentStep];
  }

  get currentControl() {
    return this.registerForm.get(this.currentStepData.key);
  }

  get canAdvance(): boolean {
    return this.currentControl?.valid || false;
  }

  onInputChange(event: any): void {
    // Marcar como touched para activar validación
    this.currentControl?.markAsTouched();
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.canAdvance) {
      event.preventDefault();
      this.onNext();
    }
  }

  onPrevious(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
      setTimeout(() => {
        this.focusCurrentInput();
      }, 100);
    }
  }

  onNext(): void {
    if (!this.canAdvance) return;

    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      setTimeout(() => {
        this.focusCurrentInput();
      }, 100);
    } else {
      this.submitForm();
    }
  }

  private focusCurrentInput(): void {
    const input = document.querySelector(`input[data-step="${this.currentStep}"]`) as HTMLInputElement;
    if (input) {
      input.focus();
    }
  }

  submitForm(): void {
    if (this.registerForm.valid) {
      // Verificar que las contraseñas coincidan
      if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
        alert('¡Ups! Parece que las contraseñas no coinciden. Por favor, revísalas.');
        return;
      }

      // Emitir el evento con los datos del formulario
      this.formCompleted.emit(this.registerForm.value as RegistrationData);
    }
  }

  getErrorMessage(): string {
    const control = this.currentControl;
    if (!control) return '';

    if (control.hasError('required')) {
      return 'Parece que este campo es obligatorio';
    }

    if (control.hasError('email')) {
      return 'Debes introducir un email válido';
    }

    if (control.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `Debe contener al menos ${minLength} caracteres`;
    }

    return '';
  }
}