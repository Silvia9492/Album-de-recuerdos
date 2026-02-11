import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';

interface FormStep {
  key: string;
  label: string;
  type: string;
  placeholder: string;
  validators: any[];
}

@Component({
  selector: 'app-starter-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './starter-page.component.html',
  styleUrl: './starter-page.component.scss',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(20px)'
        }),
        animate('600ms cubic-bezier(0.25, 0.8, 0.25, 1)',
          style({
            opacity: 1,
            transform: 'translateY(0)'
          })
        )
      ]),
      transition(':leave', [
        animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)',
          style({
            opacity: 0,
            transform: 'translateY(-20px)'
          })
        )
      ])
    ])
  ]
})

export class StarterPageComponent {
  registerForm: FormGroup;
  currentStep = 0;
  isCompleted = false;
  showForm = false;

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

  constructor(private formBuilder: FormBuilder){
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });
  }

  get currentStepData(): FormStep {
    return this.steps[this.currentStep];
  }

  get currentControl() {
    return this.registerForm.get(this.currentStepData.key);
  }

  get canAdvance(): boolean {
    return this.currentControl?.valid || false;
  }

  get progress(): number {
    return((this.currentStep +1) / this.steps.length) * 100;
  }

  onInputChange(event: any): void {
    // Marcar como touched para activar validación
    this.currentControl?.markAsTouched();
    
    // Debug: ver estado de validación
    console.log('Campo:', this.currentStepData.key);
    console.log('Valor:', this.currentControl?.value);
    console.log('Válido:', this.currentControl?.valid);
    console.log('Errores:', this.currentControl?.errors);
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && this.canAdvance) {
      event.preventDefault();
      this.nextStep();
    }
  }
  
  startRegister(): void {
    this.showForm = true;
    setTimeout(() => {
      this.focusCurrentInput();
    }, 100);
  }

  previousStep(): void {
    if(this.currentStep > 0) {
      this.currentStep--;
      setTimeout(() => {
        this.focusCurrentInput();
      }, 100);
    }
  }

  nextStep(): void {
    if(!this.canAdvance) return;

    if(this.currentStep < this.steps.length -1) {
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
    if(input) {
      input.focus();
    }
  }

  submitForm(): void {
    if(this.registerForm.valid) {
      //Si es válido, verificación de contraseñas antes de enviarlo
      if(this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
        alert('¡Ups! Parece que las contraseñas no coinciden. Por favor, revísalas.');
        return;
      }

      console.log('Formulario enviado:', this.registerForm.value);
      this.isCompleted = true;

      //HACER AQUÍ LA LLAMADA AL SERVICIO DE REGISTRO CUANDO ESTÉ IMPLEMENTADO
    }
  }

  getErrorMessage(): string {
    const control = this.currentControl;
    if(!control) return '';

    if(control.hasError('required')) {
      return 'Parece que este campo es obligatorio';
    }

    if(control.hasError('email')) {
      return 'Debes introducir un email válido';
    }

    if(control.hasError('minlength')) {
      const minLength = control.errors?.['minlength'].requiredLength;
      return `Debe contener al menos ${minLength} caracteres`;
    }

    return '';
  }
}