import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AnimationComponent from "./components/animations/animation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Poke-primeNG';
}