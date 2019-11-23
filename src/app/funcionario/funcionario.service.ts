import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { WebService } from '../utilitarios/WebService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/funcionario.model';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  public url: string;

  constructor(public _http: HttpClient) {
    this.url = WebService.url;
  }


  salvar(funcionario: Funcionario): any{
     return this._http.post(`${this.url}/funcionario/salvar`, funcionario); 
  }

  buscar(pesquisa: string): Observable<Funcionario[]>{
    pesquisa == ''? pesquisa = 'zzz': pesquisa;
    return this._http.get<Funcionario[]>(`${this.url}/funcionario/buscar/${pesquisa}`)
  }
}
