import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '../../../../node_modules/@angular/forms';
import { AntropometriaService } from './antropometria-service';
import { Antropometria } from '../../models/antropometria.model';
import { MessageService } from '../../../../node_modules/primeng/api';

@Component({
  selector: 'antropometria',
  templateUrl: './antropometria.component.html',
  styleUrls: ['./antropometria.component.css']
})
export class AntropometriaComponent implements OnInit {

  public antropometriaForm : FormGroup;

  public idpacienteEscolhido: Number;
  
  

  constructor(private fb: FormBuilder, 
              private _antropometriaService: AntropometriaService,
              private _messageService: MessageService) { }

  ngOnInit() {

  
  //   this.antropometriaForm = this.fb.group({
  //     'id': [''],
  //     'altura': [''],
  //     'peso': [''],
  //     'imc': [''],
  //     'idade': [''],
  //     'observacao': [''],
  //     'bracoRelaxadoDireito': [''],
  //     'bracoContraidoDireito': [''],
  //     'bracoRelaxadoEsquerdo': [''],
  //     'bracoContraidoEsquerdo': [''],
  //     'antebracoRelaxadoDireito': [''],
  //     'antebracoContraidoDireito': [''],
  //     'antebracoRelaxadoEsquerdo': [''],
  //     'antebracoContraidoEsquerdo': [''],
  //     'panturrilhaEsquerda': [''],
  //     'panturrilhaDireita': [''],
  //     'coxaEsquerda': [''],
  //     'coxaDireita': [''],
  //     'pescoco': [''],
  //     'ombro': [''],
  //     'peitoral': [''],
  //     'cintura': [''],
  //     'paciente': [''],
  //     'data': ['']

  //   })
  // }

  // salvar(): void{
  //   // let paciente = new paciente();
  //   // paciente = this.paciente;
  //   // this.antropometriaForm.get('paciente').setValue(paciente);
  //   // this.antropometriaForm.get('id').setValue(null);
  //   // let data = new Date();
  //   // this.antropometriaForm.get('data').setValue(data);
  //   // this._antropometriaService.salvar(this.antropometriaForm.value).subscribe(
  //   //         res=>this.mostrarMensagemSucesso(),
  //   //         (erro)=>this.mostrarMensagemErro()
  //   //     );

  // } 

  // //Busca as informações atuais de antropometria do paciente
  // buscarAntropometriapaciente(): void{
  //     this._antropometriaService.buscarPorIdpaciente(this.idpacienteEscolhido)
  //       .subscribe(res=>{
  //           this.carregarAntropometriapaciente(res as Antropometria);
  //       })
  // }

  // //Carrega antropometria anteriormente cadastrada (caso haja)
  // carregarAntropometriapaciente(antropometriaModel: any): void{
  //     this.antropometriaForm.patchValue(antropometriaModel);
  // }

  // mostrarMensagemSucesso(): void {
  //   this._messageService.add({severity:'success', summary:'Antropometria cadastrada com sucesso!'});
  //     this.limparMensagem();
  // }

  // mostrarMensagemErro(): void {
  //     this._messageService.add({severity:'error', summary:'Ops! Algum problema aconteceu!'});
  //     this.limparMensagem();
  // }

  // limparMensagem(): void{
  //     setTimeout(()=>{
  //         this._messageService.clear();
  //     },4000);
  // }
}
}