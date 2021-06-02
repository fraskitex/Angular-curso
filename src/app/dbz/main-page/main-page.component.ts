import { Component} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  /*get personajes():Personaje[]{
    return this.dbzservice.personajes;
  }*/

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  // agregarNuevoPersonaje( event: Personaje){
  //   // debugger; // es como un breakpoint
  //   this.personajes.push(event);
  // }

  constructor(){}
}
