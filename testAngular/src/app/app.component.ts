import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {HealthcareComponent} from "./healthcare/healthcare.component";
import {ServicesComponent} from "./services/services.component";
import {CustomerComponent} from "./customer/customer.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root', // INDISPENSABLE PRESQUE
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HealthcareComponent, ServicesComponent, CustomerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass' // CSS
})
export class AppComponent {
  title = 'testAngular';
}
