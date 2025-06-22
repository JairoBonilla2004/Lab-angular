import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [CommonModule],
  templateUrl: './toggle.html',
  styleUrl: './toggle.css',
  standalone:true
})

export class ToggleComponent {
  estado = 'OFF';
  toggle() { this.estado = this.estado === 'OFF' ? 'ON' : 'OFF'; }
}