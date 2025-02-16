import { Component } from '@angular/core';
import {LowerCasePipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  standalone: true,
  imports: [
    NgForOf,
    LowerCasePipe
  ],
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent {
  services = [
    { title: 'Search doctor', description: 'Choose your doctor from thousands of specialists, general, and trusted hospitals.' },
    { title: 'Online pharmacy', description: 'Buy your medicines with our mobile application with a simple delivery system.' },
    { title: 'Consultation', description: 'Free consultation with our trusted doctors and get the best recommendations.' },
    { title: 'Details info', description: 'Free consultation with our trusted doctors and get the best recommendations.' },
    { title: 'Emergency care', description: 'You can get 24/7 expert care for yourself or your children and your lovely family.' },
    { title: 'Tracking', description: 'Track and save your medical history and health data.' }
  ];
}
