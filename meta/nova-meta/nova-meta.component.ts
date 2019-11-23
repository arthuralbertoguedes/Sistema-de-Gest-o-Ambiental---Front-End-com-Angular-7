import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tradutorCalendario } from 'src/app/shared/tradutor-calendario';
import { Router } from '@angular/router';
import { MetaService } from '../meta.service';

@Component({
  selector: 'app-nova-meta',
  templateUrl: './nova-meta.component.html',
  styleUrls: ['./nova-meta.component.css']
})
export class NovaMetaComponent implements OnInit {

  public msgs: Message[] = [];
  public novaMetaForm: FormGroup;
  public ptbr: any;

  constructor(public _messageService: MessageService,
              public fb: FormBuilder,
              public _router: Router,
              public _service: MetaService) { }

  ngOnInit() {
    this.ptbr = tradutorCalendario;
    this.novaMetaForm = this.fb.group(
      {
        'nome':['', Validators.required],
        'dataInicio': [''],
        'dataFim': ['']
      }
    );
  }

  mostrarMensagemSucesso(): void {
      this._messageService.add({severity:'success', summary:'Meta cadastrada com sucesso!'});
      this.limparMensagem();
  }

  mostrarMensagemErro(): void {
      this._messageService.add({severity:'error', summary:'Ops! Algum problema aconteceu!'});
      this.limparMensagem();
  }

  limparMensagem(): void{
      setTimeout(()=>{
          this._messageService.clear();
      },4000);
  }

  voltar(): void{
    this._router.navigate(['/home/metas'])
  }

  vincularDataInicio(event: any): void{
    this.novaMetaForm.get('dataInicio').setValue(event);
  }

  vincularDataFim(event: any): void{
    this.novaMetaForm.get('dataFim').setValue(event);
  }

  salvar(): void{
    let meta = this.novaMetaForm.value;
    console.log(meta);
    this._service.salvar(meta)
      .subscribe(
        res => {
          this.mostrarMensagemSucesso();
          this.novaMetaForm.reset();
        },
        erro => {
          this.mostrarMensagemErro
        }
      )
  }
}
