import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtividadesService } from './atividades.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent implements OnInit {

  public listaAtividades: any;
  public pesquisa: string = "";
  constructor(public _router: Router,
              public _service: AtividadesService) { }

  ngOnInit() {
    this.pesquisarAtividades();
  }

  adicionar(): void{
    this._router.navigate(['/home/novas-atividades'])
  }

  pesquisarAtividades(): void{

    this._service.buscar(this.pesquisa)
      .subscribe(
        res => {
          this.listaAtividades = res
          console.log(this.listaAtividades);
        }
      )
  }
}
