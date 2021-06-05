import { Component} from '@angular/core';
import { GifsService } from '../services/gifsService.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  get resultados(){
    return this.gifsservice.resultados;
  }

  constructor(private gifsservice: GifsService) { }

}