import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  recebendo() {
    alert('Exercício 5: Recebendo evento do elemento filho.');
  }
}
