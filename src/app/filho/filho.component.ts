import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css'],
})
export class FilhoComponent {
  listaDeNumeros: number[] = [2, 5, 8, 9, 12];
  aleatorio: number;
  texto: string = 'Texto do componente';
  @Input() exercicio5: string;
  @Output() eventoEx5 = new EventEmitter();

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

  exercicio3(): void {
    this.aleatorio = Math.floor(Math.random() * 100 + 1);
    this.aleatorio = Math.pow(this.aleatorio, 2);
  }

  exercicio4(): void {
    console.log('Você está passando o mouse sobre o parágrafo do exercício 4');
  }
}
