
import { HttpClient } from '@angular/common/http';
import { WebService } from '../utilitarios/WebService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Atividades } from '../models/atividades.model';
import { FuncionarioAtividade } from '../models/funcionarioAtividade.model';


@Injectable({
  providedIn: 'root'
})
export class AtividadesService {

  public url: string;

  constructor(public _http: HttpClient) {
    this.url = WebService.url;
  }


  salvar(atividadesFuncionario: FuncionarioAtividade[]): any{
    console.log(atividadesFuncionario)
     return this._http.post(`${this.url}/atividadesFuncionario/salvar`, atividadesFuncionario); 
  }

  buscar(pesquisa: string): Observable<Atividades[]>{
    pesquisa == ''? pesquisa = 'zzz': pesquisa;
    return this._http.get<Atividades[]>(`${this.url}/atividades/buscar/${pesquisa}`)
  }
}
