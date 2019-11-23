import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacoesPessoaispacientesComponent } from './informacoes-pessoais-paciente/informacoes-pessoais-paciente.component';
import { UtilitariosModule } from '../utilitarios/utilitarios.module';
import { MessageService } from '../../../node_modules/primeng/api';

@NgModule({
  declarations: [
      InformacoesPessoaispacientesComponent
  ],
  imports: [
      CommonModule,
      UtilitariosModule
  ],
  exports:[
      InformacoesPessoaispacientesComponent
  ],
  providers: [
      MessageService
  ]
})
export class DadosPessoaisModule { }
