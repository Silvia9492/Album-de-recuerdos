import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StarterPageComponent } from './components/starter-page/starter-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StarterPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'album-recuerdos';
}
