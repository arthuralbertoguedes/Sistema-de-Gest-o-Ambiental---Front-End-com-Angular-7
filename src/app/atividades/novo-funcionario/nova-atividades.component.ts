import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tradutorCalendario } from 'src/app/shared/tradutor-calendario';
import { Router } from '@angular/router';
import { AtividadesService } from '../atividades.service';
import { FuncionarioService } from 'src/app/funcionario/funcionario.service';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioAtividade } from 'src/app/models/funcionarioAtividade.model';
import { Atividades } from 'src/app/models/atividades.model';
import { Atividade } from 'src/app/models/atividade.model';

@Component({
  selector: 'app-nova-atividades',
  templateUrl: './nova-atividades.component.html'
})
export class NovasAtividadesComponent implements OnInit {

  public msgs: Message[] = [];
  public atividadesForm: FormGroup;
  public ptbr: any;
  public pesquisa: string = "";
  public listaFuncionarios: Funcionario[] = [];
  public listaAtividadesFuncionarios: FuncionarioAtividade[] = [];
  public porcentagem: any = 0;

  constructor(public _messageService: MessageService,
              public fb: FormBuilder,
              public _router: Router,
              public _service: AtividadesService,
              public _funcionarioService: FuncionarioService) { }

  ngOnInit() {

    this.ptbr = tradutorCalendario;
    this.atividadesForm = this.fb.group(
      {
        'nome':['', Validators.required],
        'ramo': [''],
        'observacoes': [''],
        'porcentagemAtividade': [''],
        'funcionarioSelecionado': ['']
      }
    );
  }

  mostrarMensagemSucesso(): void {
      this._messageService.add({severity:'success', summary:'Atividade cadastrada com sucesso!'});
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
    this._router.navigate(['/home/atividades'])
  }

  vincularDataInicio(event: any): void{
    this.atividadesForm.get('dataInicio').setValue(event);
  }

  vincularDataFim(event: any): void{
    this.atividadesForm.get('dataFim').setValue(event);
  }

  salvar(): void{

    console.log(this.listaAtividadesFuncionarios);
    this._service.salvar(this.listaAtividadesFuncionarios)
      .subscribe(
        res => {
          this.mostrarMensagemSucesso();
          this.atividadesForm.reset();
        },
        erro => {
          this.mostrarMensagemErro
        }
      )
  }

  alterarDivFuncionarioAtividade(div: HTMLElement): void{
    if(div.classList.contains('removerFuncionarioAtividade'))
      div.classList.remove('removerFuncionarioAtividade');
    else
      div.classList.add('removerFuncionarioAtividade');  
  }

  pesquisarFuncionarios(pesquisa: any): void{

    this._funcionarioService.buscar(pesquisa)
      .subscribe(
        res => {
          this.listaFuncionarios = res;
          
        }
      )
  }

  vincularFuncionario(event: any): void{
    this.atividadesForm.get('funcionarioSelecionado').setValue(event);
  }

  adicionarFuncionarioLista(): void{
    let atividadeFuncionario: FuncionarioAtividade = new FuncionarioAtividade();

    atividadeFuncionario = this.atividadesForm.value;
    atividadeFuncionario.porcentagem = this.atividadesForm.get('porcentagemAtividade').value;
    atividadeFuncionario.funcionario = this.atividadesForm.get('funcionarioSelecionado').value;

    let atividade: Atividade = new Atividade();
    atividade.nome = this.atividadesForm.get('nome').value;
    atividade.ramo = this.atividadesForm.get('ramo').value;
    atividade.observacoes = this.atividadesForm.get('observacoes').value;
    atividade.id = null;
    
    atividadeFuncionario.atividade = atividade;

    this.listaAtividadesFuncionarios.push(atividadeFuncionario);
    this.atividadesForm.get('porcentagemAtividade').setValue("");
    this.atividadesForm.get('funcionarioSelecionado').setValue("");
    this.porcentagem = 0;

  }

  setarPorcentagem(): void{
    this.porcentagem = this.atividadesForm.get('porcentagemAtividade').value;
  }
}
