import { Component } from '@angular/core';
import { Voyage } from '../models/Voyage';
import { VoyageService } from '../services/voyage.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-gen-voyage',
  templateUrl: './gen-voyage.component.html',
  standalone: true,
  imports: [
    CurrencyPipe,
  ],
  styleUrls: ['./gen-voyage.component.css'],
})
export class GenVoyageComponent {
  generatedVoyage: Voyage | undefined;
  generatedVoyages: Voyage[] = [];
  constructor(private voyageService: VoyageService) {}

  generateVoyage(): void {
    this.generatedVoyage = this.voyageService.generateRandomVoyage();
  }

  addVoyage(): void {
    if (this.generatedVoyage) {
      if (confirm('Es-tu sûr de vouloir ajouter le voyage ?')) {
        this.voyageService.addVoyage(this.generatedVoyage);
        this.generatedVoyages.push(this.generatedVoyage);
        this.generatedVoyage = undefined;
      }

    }
  }
}
