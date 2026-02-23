import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = 'Button';
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;

  @Output() clicked = new EventEmitter<Event>();

  onClick(event: Event){
    if(!this.disabled){
      this.clicked.emit(event);
    }
  }
}
