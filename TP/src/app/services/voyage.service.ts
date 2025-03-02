import { Injectable } from '@angular/core';
import { Voyage } from '../models/Voyage';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from '../data';

@Injectable({
  providedIn: 'root',
})
export class VoyageService {
  private voyages: Voyage[] = [];

  constructor() {
    this.addVoyage({
      id: '1',
      destination: 'Paris',
      description: 'La ville des lumières et de la romance.',
      prix: 500,
    });
  }

  getVoyages(): Voyage[] {
    return this.voyages;
  }

  addVoyage(voyage: Voyage): void {
    this.voyages.push(voyage);
  }

  // @ts-ignore
  getVoyageById(id: string): Voyage {
    for (let i = 0; i < this.voyages.length; i++) {
      if (this.voyages[i].id === id) {
        return this.voyages[i];
      }
    }
  }

  deleteVoyage(id: string): void {
    for (let i = 0; i < this.voyages.length; i++) {
      if (this.voyages[i].id === id) {
        this.voyages.splice(i, 1);
        break;
      }
    }
  }

  generateRandomVoyage(): Voyage {
    const randomNumber = Math.floor(Math.random() * DESTINATIONS.length);

    return {
      id: Math.random().toString(36).substring(2),
      destination: DESTINATIONS[randomNumber],
      description: DESCRIPTIONS[randomNumber],
      prix: PRIX[randomNumber],
    };
  }
  getPaginatedVoyages(page: number, pageSize: number): Voyage[] {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return this.voyages.slice(startIndex, endIndex);
  }

}
