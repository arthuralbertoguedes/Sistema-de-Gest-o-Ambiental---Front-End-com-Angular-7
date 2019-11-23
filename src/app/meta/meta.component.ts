import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetaService } from './meta.service';

@Component({
  selector: 'app-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.css']
})
export class MetaComponent implements OnInit {

  public listaMetas: any;
  public pesquisa: string = "";
  constructor(public _router: Router,
              public _service: MetaService) { }

  ngOnInit() {
    this.pesquisarMetas();
  }

  adicionar(): void{
    this._router.navigate(['/home/nova-meta'])
  }

  pesquisarMetas(): void{

    this._service.buscar(this.pesquisa)
      .subscribe(
        res => this.listaMetas = res
      )
  }
}
