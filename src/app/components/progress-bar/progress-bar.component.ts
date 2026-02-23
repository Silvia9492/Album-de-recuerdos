import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  currentStep = input.required<number>();
  totalSteps = input.required<number>();

  get progress(): number {
    return ((this.currentStep()+1) / this.totalSteps()) * 100;
  }
}
