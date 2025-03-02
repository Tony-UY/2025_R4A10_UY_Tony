import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageService } from '../services/voyage.service';
import { Voyage } from '../models/Voyage';
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-detail-voyage',
  templateUrl: './detailvoyage.component.html',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  styleUrls: ['./detailvoyage.component.css']
})
export class DetailVoyageComponent implements OnInit {
  voyage: Voyage | undefined; // voyage peut être undefined

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private voyageService: VoyageService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.voyage = this.voyageService.getVoyageById(id);
     }
  }

  deleteVoyage(id: string | undefined): void {
    if (id) {
      if(confirm('Es-tu sur ?')) {}
      this.voyageService.deleteVoyage(id);
      this.router.navigate(['/home']);
    } else {
      console.error('ID du voyage non défini');
    }
  }

}


