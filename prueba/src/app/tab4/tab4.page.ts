import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  a: number = 0;
  b: number = 0;
  c: number = 0;
  resultado: string = '';

  constructor() {}

  calcularRaices() {
    const { a, b, c } = this;
    const discriminante = b * b - 4 * a * c;
    if (discriminante > 0) {
      const sqrtDiscriminante = Math.sqrt(discriminante);
      const raiz1 = (-b + sqrtDiscriminante) / (2 * a);
      const raiz2 = (-b - sqrtDiscriminante) / (2 * a);
      this.resultado = `Las raíces son ${raiz1} y ${raiz2}`;
    } else if (discriminante === 0) {
      const raiz = -b / (2 * a);
      this.resultado = `La raíz doble es ${raiz}`;
    } else {
      this.resultado = 'No hay raíces reales';
    }
  }
}
