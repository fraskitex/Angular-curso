import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;
  
  constructor(private activateRoute: ActivatedRoute,
    private paisservice: PaisService) { }

  ngOnInit(): void {
    
    this.activateRoute.params
      .pipe(
        switchMap((param) => this.paisservice.getPaisPorAlpha(param.id)),
        tap(console.log)
      )
      .subscribe(resp =>{
        this.pais = resp;
      })
    // this.activateRoute.params
    //   .subscribe( params =>{
    //     console.log(params.id);
    //     this.paisservice.getPaisPorAlpha(params.id).
    //     subscribe( pais => {
    //       console.log(pais);
    //     });
    //   });

  }

}
