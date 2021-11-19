import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  listaDeNumeros: number[] = [2, 5, 8, 9, 12];

  exercicio2(): void {
    alert('Maior valor é: ' + this.maiorNumero(this.listaDeNumeros));
  }

  maiorNumero(lista: number[]): number {
    let max: number = 0;
    for (let item of lista) {
      if (item > max) {
        max = item;
      }
    }
    return max;
  }
}
