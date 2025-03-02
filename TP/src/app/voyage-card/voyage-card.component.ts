import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Voyage } from '../models/Voyage';
import {CurrencyPipe, SlicePipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-voyage-card',
  templateUrl: './voyage-card.component.html',
  styleUrls: ['./voyage-card.component.css'],
  imports: [
    CurrencyPipe,
    SlicePipe,
    RouterLink
  ],
  standalone: true
})
export class VoyageCardComponent {
  @Input() voyage!: Voyage;
  @Output() delete = new EventEmitter<string>();

  onDelete(): void {
    this.delete.emit(this.voyage.id);
  }
}
