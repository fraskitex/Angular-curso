import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifsService.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifservice: GifsService){

  }

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length === 0){
      return;
    }
    this.gifservice.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
    // document.querySelector('input').value= "";
  }

}
