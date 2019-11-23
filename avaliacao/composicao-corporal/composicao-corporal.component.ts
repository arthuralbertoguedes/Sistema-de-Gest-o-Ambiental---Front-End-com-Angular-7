import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
import { ComposicaoService } from './composicao-service';
import { ComposicaoCorporal } from '../../models/composicao-corporal.model';

@Component({
  selector: 'composicao-corporal',
  templateUrl: './composicao-corporal.component.html',
  styleUrls: ['./composicao-corporal.component.css']
})
export class ComposicaoCorporalComponent implements OnInit {

  public composicaoForm: FormGroup;
  public idpaciente    : Number;

  constructor(private fb: FormBuilder,
              private _composicaoService: ComposicaoService) { }

  ngOnInit() {

  }

  //   this.composicaoForm = this.fb.group({
  //     'id': [''],
  //     'massaGorda': [''],
  //     'massaMagra': [''],
  //     'aguaCorporal': [''],
  //     'pesoOsseo': [''],
  //     'pesoResidual': [''],
  //     'pesoMuscular': [''],
  //     'gorduraVisceral': [''],
  //     'idadepacientebolica': [''],
  //     'triceps': [''],
  //     'biceps': [''],
  //     'subescapular': [''],
  //     'toracica': [''],
  //     'axilarMedia': [''],
  //     'supraIliaca': [''],
  //     'abdominal': [''],
  //     'coxa': [''],
  //     'paciente': ['']

  //   })
  // }

  // salvar(): void{
  //   let paciente = new paciente();
  //   paciente = this.paciente;
  //   this.composicaoForm.get('paciente').setValue(paciente);
  //   this._composicaoService.salvar(this.composicaoForm.value).subscribe(
  //           res=>alert('salvou'),
  //           (erro)=>console.log(erro)
  //       );

  // }

  // buscarComposicaopacienteEscolhido(): void{
  //     this._composicaoService.buscarPorIdpaciente(this.idpaciente)
  //       .subscribe(res=>{
  //           this.setarComposicaoCorporalpaciente(res as ComposicaoCorporal);
  //       })
  // }

  // setarComposicaoCorporalpaciente(composicaoCorporalModel: ComposicaoCorporal): void{
  //     this.composicaoForm.patchValue(composicaoCorporalModel)
  // }
}
