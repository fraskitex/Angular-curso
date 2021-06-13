import { Component, Output,EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-busqueda',
  templateUrl: './pais-busqueda.component.html',
  styles: [
  ]
})
export class PaisBusquedaComponent  implements OnInit{


  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() inPlaceholder: string = "";

  debouncer: Subject<string> = new Subject();

  termino:string = '';

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit(valor);
    })
  }


  buscar(){
    this.onEnter.emit(this.termino);

  }

  teclaPresionada(){
    this.debouncer.next( this.termino);
    
  }

}
