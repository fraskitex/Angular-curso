import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root' //evita tener que estar especificado en los providers
}) //servicio goblal
export class GifsService {

  private _apiKey: string ='doVmersYPPipkbXzeW7vC7KQzctuep2O'
  private servicioUrl:string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  
  public resultados: Gif[] = [];

  get historial(){
    //this._historial = this._historial.splice(0,10); perdemos valores acortar el array que damos
    return [...this._historial];//[...] sirven para romper relación + seguridad
  }
  constructor(private http:HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
  }

  /*async*/ buscarGifs(query:string){

    query = query.trim().toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
     
    }

    const params = new HttpParams()
    .set('api_key',this._apiKey)
    .set('limit','10')
    .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
      .subscribe((resp: SearchGifsResponse) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
      
    // 1ª manera de hacer peticion http esto necesita async en metodo
    // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=doVmersYPPipkbXzeW7vC7KQzctuep2O&q=Dragonballz&limit=10')
    // const data = await resp.json();
    // console.log(data);
    // 2ª manera de hacer peticion http
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=doVmersYPPipkbXzeW7vC7KQzctuep2O&q=Dragonballz&limit=10')
    // .then(resp =>{
    //   resp.json().then(data =>{console.log(data)});
    // });
    
  }
}
