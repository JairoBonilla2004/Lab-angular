import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from './calculator';
import { ContadorComponent } from './contador/contador';
import { SaludoComponent } from './saludo/saludo';
import { CardComponent } from './card/card';
import { ListaComponent } from './lista/lista';
import { ToggleComponent } from './toggle/toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ContadorComponent, SaludoComponent,CardComponent, ListaComponent, ToggleComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']  // corregido a plural y en array
})
export class App {
  protected title = 'proyecto-pruebas'; 

  ngOnInit(): void {
    let calculator = new Calculator();

    let result = calculator.multiply(2, 3);
    console.log(result === 6 ? 'Test passed' : 'Test failed');

    let result2 = calculator.divide(1, 3);
    console.log(result2 === 1 / 3 ? 'Test passed' : 'Test failed');

    try {
      let result3 = calculator.divide(1, 0);
      console.log('Test failed');  // debería lanzar error, si no, falla el test
    } catch (error) {
      console.log('Test passed');  // error esperado: división por cero
    }
  }
}
