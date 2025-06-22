import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  standalone: true, 
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class ContadorComponent {
  contador = 0;
  aumentar() {
    this.contador++;
  }
  disminuir() {
    this.contador--;
  }
  reset() {
    this.contador = 0;
  }
}
