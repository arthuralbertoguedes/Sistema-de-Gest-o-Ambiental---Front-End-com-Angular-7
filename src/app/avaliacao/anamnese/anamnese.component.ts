 import { Component, OnInit} from '@angular/core';
// import { FormGroup, FormBuilder } from '../../../../node_modules/@angular/forms';
// import { AnamneseService } from './anamnese.service';
// import { Anamnese } from '../../models/anamnese.model';
// import { MessageService } from '../../../../node_modules/primeng/api';




 @Component({
  selector: 'anamnese',
  templateUrl: './anamnese.component.html',
 styleUrls: ['./anamnese.component.css']
})
export class AnamneseComponent implements OnInit {ngOnInit() {}}

//   public anamneseForm: FormGroup;
//   @Output() chamarAnamnese: EventEmitter<string> = new EventEmitter();

//   //Varíavel que recebe o id do paciente escolhido do componente pai
//   @Input() pacienteEscolhido: paciente;

//   //Apenas para recuperar as informações das anamneses
//   public idAnamnese               : Number;
//   public anamnesepacienteEscolhido: Object;

//   constructor(private fb: FormBuilder,
//               private _service: AnamneseService,
//               private _messageService: MessageService) { }

//   ngOnInit() {

//     // Quando tiver carregado o paciente no componente pai
//     // limpa o interval
//     let interval = setInterval(()=>{
//                       if(this.pacienteEscolhido!=undefined){
//                           this.idAnamnese = this.pacienteEscolhido.id;
//                           this.buscarAnamnesepacienteEscolhido();
//                           clearInterval(interval);
//                       }
//                    }, 500);


//     this.anamneseForm = this.fb.group({
//       'id': [''],
//       'objetivo': [''],
//       'casoClinico': [''],
//       'refeicoesFora': ['B'],
//       'apetite': ['B'],
//       'fumante': ['S'],
//       'bebidas': ['S'],
//       'academia': ['S'],
//       'atividadesFisicas': [''],
//       'tempoDeSono': [''],
//       'qualidadeDeSono': ['B'],
//       'gestante': ['S'],
//       'diabetes': ['S'],
//       'alergias': [''],
//       'sintomas': [''],
//       'doencas': [''],
//       'observacoes': [''],
//       'quantidadeRefeicoes': [''],
//       'suplementos': [''],
//       'alimentosConsumidos': [''],
//       'paciente': ['']
//     });
//   }

//   buscarAnamnesepacienteEscolhido(): void{
//       this._service.buscarPorId(this.idAnamnese)
//           .subscribe(
//               res=>{
//                   this.setarAnamnesepaciente(res as Anamnese);
//                 }
//           )

//   }

//   public salvar(): void{
//       // let paciente = new paciente();
//       // paciente = this.pacienteEscolhido;
//       // this.anamneseForm.get('paciente').setValue(paciente);
//       // let model = this.anamneseForm.value;
//       // this._service.salvar(model).subscribe(
//       //     res => {
//       //         this.mostrarMensagemSucesso();
//       //     },
//       //     erro => {
//       //         this.mostrarMensagemErro();
//       //     }
//       // );
//   }

//   setarAnamnesepaciente(anamnese: Anamnese): void{
//       try{
//         this.anamneseForm.patchValue(anamnese);
//       }
//       catch(e){}
//   }

//   mostrarMensagemSucesso(): void {
//     this._messageService.add({severity:'success', summary:'Anamnese cadastrada com sucesso!'});
//       this.limparMensagem();
//   }

//   mostrarMensagemErro(): void {
//       this._messageService.add({severity:'error', summary:'Ops! Algum problema aconteceu!'});
//       this.limparMensagem();
//   }

//   limparMensagem(): void{
//       setTimeout(()=>{
//           this._messageService.clear();
//       },4000);
//   }

// }
