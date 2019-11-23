import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../utilitarios/WebService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MetaService {

  public url: string;

  constructor(public _http: HttpClient) {
    this.url = WebService.url;
  }


  salvar(meta: Meta): any{
     return this._http.post(`${this.url}/meta/salvar`, meta); 
  }

  buscar(pesquisa: string): Observable<Meta[]>{
    pesquisa == ''? pesquisa = 'a': pesquisa;
    return this._http.get<Meta[]>(`${this.url}/meta/buscar/${pesquisa}`)
  }
}
