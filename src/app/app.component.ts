import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsContainerComponent } from './cards-container/cards-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homework';
}
