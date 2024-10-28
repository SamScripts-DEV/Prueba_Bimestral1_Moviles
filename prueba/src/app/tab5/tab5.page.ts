import { Component } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  nota: string = '';

  constructor() {
    this.cargarTexto();
  }

  viewWhenEnter(){
    const textoGuardado = localStorage.getItem('item')
    if(textoGuardado){
      this.nota=textoGuardado
    }
  }

  guardarTexto(){
    localStorage.setItem('notaGuardada', this.nota);
    alert('Nota Guardada')
  }

  cargarTexto(){
    const textoGuardar = localStorage.getItem('notaGuardada');
    if(textoGuardar){
      this.nota = textoGuardar;
    }
  }


}
