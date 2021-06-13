import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean=false;
  paises: Pais[] = [];

  

  constructor(private paisservice: PaisService) { }

  buscar( termino: string){
    this.hayError=false;
    this.termino = termino;
    if(this.termino != ""){
      this.paisservice.buscarPais(this.termino)
      .subscribe( paises =>{
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.hayError=true;
        this.paises = [];
      });
    }
  }

  sugerencias(termino:string){
    this.hayError=false;
    this.termino = termino;
    if(this.termino != ""){
      this.paisservice.buscarPais(this.termino).subscribe( paises =>{
        console.log(paises);
        this.paises = paises;
      }, (err) => {
        this.hayError=true;
        this.paises = [];
      });
    }

  }
}
