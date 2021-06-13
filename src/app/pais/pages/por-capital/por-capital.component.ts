import { Component} from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = "";
  hayError: boolean=false;
  paises: Pais[] = [];

  

  constructor(private paisservice: PaisService) { }

  buscar( termino: string){
    this.hayError=false;
    this.termino = termino;
    if(this.termino != ""){
      this.paisservice.buscarCapital(this.termino)
      .subscribe( paises =>{
        this.paises = paises;
      }, (err) => {
        this.hayError=true;
        this.paises = [];
      });
    }
  }


}
