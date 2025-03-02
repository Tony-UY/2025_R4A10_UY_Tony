import { Injectable } from '@angular/core';
import { Voyage } from '../models/Voyage';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from '../data';

@Injectable({
  providedIn: 'root',
})
export class VoyageService {
  private readonly STORAGE_KEY = 'voyages';
  private voyages: Voyage[] = [];

  constructor() {
    this.loadVoyages();
    if (this.voyages.length === 0) {
      this.addVoyage({
        id: '1',
        destination: 'Paris',
        description: 'La ville des lumières et de la romance.',
        prix: 500,
      });
    }
  }

  private loadVoyages(): void {
    const voyages = localStorage.getItem(this.STORAGE_KEY);
    this.voyages = voyages ? JSON.parse(voyages) : [];
  }

  private saveVoyages(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.voyages));
  }

  getVoyages(): Voyage[] {
    return this.voyages;
  }

  addVoyage(voyage: Voyage): void {
    this.voyages.push(voyage);
    this.saveVoyages();
  }

  getVoyageById(id: string): Voyage | undefined {
    return this.voyages.find((voyage) => voyage.id === id);
  }

  deleteVoyage(id: string): void {
    this.voyages = this.voyages.filter((voyage) => voyage.id !== id);
    this.saveVoyages();
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
