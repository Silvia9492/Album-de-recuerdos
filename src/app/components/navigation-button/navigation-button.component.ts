import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navigation-button',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss'
})
export class NavigationButtonComponent {
  // Inputs
  currentStep = input.required<number>();
  totalSteps = input.required<number>();
  canAdvance = input.required<boolean>();
  showPrevious = input<boolean>(true);
  
  // Outputs
  previous = output<void>();
  next = output<void>();

  onPreviousClick(): void {
    this.previous.emit();
  }

  onNextClick(): void {
    if (this.canAdvance()) {
      this.next.emit();
    }
  }

  get isLastStep(): boolean {
    return this.currentStep() >= this.totalSteps() - 1;
  }

  get showPreviousButton(): boolean {
    return this.showPrevious() && this.currentStep() > 0;
  }
}
