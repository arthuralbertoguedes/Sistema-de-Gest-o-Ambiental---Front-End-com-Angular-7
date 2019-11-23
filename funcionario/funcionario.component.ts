import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from './funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  public listaFuncionarios: any;
  public pesquisa: string = "";
  constructor(public _router: Router,
              public _service: FuncionarioService) { }

  ngOnInit() {
    this.pesquisarFuncionarios();
  }

  adicionar(): void{
    this._router.navigate(['/home/novo-funcionario'])
  }

  pesquisarFuncionarios(): void{

    this._service.buscar(this.pesquisa)
      .subscribe(
        res => {
          this.listaFuncionarios = res
          console.log(this.listaFuncionarios);
        }
      )
  }
}
