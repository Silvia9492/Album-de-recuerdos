import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';
import { InitFormComponent, RegistrationData } from '../init-form/init-form.component';

@Component({
  selector: 'app-starter-page',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    InitFormComponent
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
  showForm = false;
  isCompleted = false;

  startRegister(): void {
    this.showForm = true;
  }

  onFormCompleted(data: RegistrationData): void {
    console.log('Registro completado:', data);
    this.isCompleted = true;
    
    // AQUÍ harás la llamada al servicio de registro cuando esté implementado
    // this.authService.register(data).subscribe(...)
  }
}