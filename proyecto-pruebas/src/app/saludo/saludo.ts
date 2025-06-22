import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  imports: [CommonModule],
  templateUrl: './saludo.html',
  styleUrl: './saludo.css',
  standalone:true
})
export class SaludoComponent {
  @Input() nombre?: string = 'Mundo';

  get nombreSeguro(): string {
    return this.nombre || '';
  }
}

