import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tradutorCalendario } from 'src/app/shared/tradutor-calendario';
import { Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-novo-funcionario',
  templateUrl: './novo-funcionario.component.html',
  styleUrls: ['./novo-funcionario.component.css']
})
export class NovoFuncionarioComponent implements OnInit {

  public msgs: Message[] = [];
  public funcionarioForm: FormGroup;
  public ptbr: any;

  constructor(public _messageService: MessageService,
              public fb: FormBuilder,
              public _router: Router,
              public _service: FuncionarioService) { }

  ngOnInit() {
    this.ptbr = tradutorCalendario;
    this.funcionarioForm = this.fb.group(
      {
        'nome':['', Validators.required],
        'cargo': [''],
        'observacoes': [''],
        'treinamento': ['false']
      }
    );
  }

  mostrarMensagemSucesso(): void {
      this._messageService.add({severity:'success', summary:'Funcionário cadastrado com sucesso!'});
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
    this._router.navigate(['/home/funcionario'])
  }

  vincularDataInicio(event: any): void{
    this.funcionarioForm.get('dataInicio').setValue(event);
  }

  vincularDataFim(event: any): void{
    this.funcionarioForm.get('dataFim').setValue(event);
  }

  salvar(): void{
    let meta = this.funcionarioForm.value;
    console.log(meta);
    this._service.salvar(meta)
      .subscribe(
        res => {
          this.mostrarMensagemSucesso();
          this.funcionarioForm.reset();
        },
        erro => {
          this.mostrarMensagemErro
        }
      )
  }

  radioTrue(): void{
    this.funcionarioForm.get('treinado').setValue(true);
  }
}
