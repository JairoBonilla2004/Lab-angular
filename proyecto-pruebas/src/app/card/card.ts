import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
  standalone:true
})
export class CardComponent {
  @Input() titulo = 'Título por defecto';
  @Input() descripcion = 'Descripción por defecto';
  @Input() imagenUrl?: string;
  @Input() botonTexto?: string;

  @Output() botonClick = new EventEmitter<void>();

  emitirClick() {
    this.botonClick.emit();
  }
}
