import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // INDISPENSABLE PRESQUE
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass' // CSS
})
export class AppComponent {
  title = 'testAngular';
}
