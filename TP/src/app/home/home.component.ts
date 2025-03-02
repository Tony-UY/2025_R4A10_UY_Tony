import { Component } from '@angular/core';
import {Voyage} from "../models/Voyage";
import {VoyageService} from "../services/voyage.service";
import {CurrencyPipe, SlicePipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CurrencyPipe,
    RouterLink,
    SlicePipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  voyages: Voyage[] = [];
  currentPage = 1;
  pageSize = 20;

  constructor(private voyageService: VoyageService) {
    this.loadVoyages();
  }


  deleteVoyage(id: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce voyage ?')) {
      this.voyageService.deleteVoyage(id);
      this.voyages = this.voyageService.getVoyages();
    }

  }
  loadVoyages(): void {
    this.voyages = this.voyageService.getPaginatedVoyages(this.currentPage, this.pageSize);
  }

  nextPage(): void {
    this.currentPage++;
    this.loadVoyages();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadVoyages();
    }
  }

}
