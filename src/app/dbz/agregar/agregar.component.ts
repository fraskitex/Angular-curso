import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input('data') nuevo:Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output('onnewCh') nuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();


  /*cambiarNombre( event:any){
    console.log(event.target.value);
  }*/
  constructor(private dbzservice:DbzService){}


  agregar( ):void {
    if(this.nuevo.nombre.trim().length === 0){return;}
    this.dbzservice.agregarPersonaje(this.nuevo);
    // this.nuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder: 0
    }
  }

}
