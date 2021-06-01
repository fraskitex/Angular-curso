import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';
  borrarHeroe(){
    //this.heroes.splice(this.heroes.length-1); //devuelve el array hasta el numero dado
    //this.heroes = [];
    this.heroeBorrado = this.heroes.shift() || ''; //borra primer elemento y retorna
  }

}


