import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { Message, MessageService } from '../../../../node_modules/primeng/api';
import { Router } from '../../../../node_modules/@angular/router';
import { tradutorCalendario } from '../../shared/tradutor-calendario';
import { Endereco } from '../../models/endereco.model';

@Component({
  selector: 'informacoes-pessoais-paciente',
  templateUrl: './informacoes-pessoais-paciente.component.html',
  styleUrls: ['./informacoes-pessoais-paciente.component.css']
})
export class InformacoesPessoaispacientesComponent implements OnInit {

  @Input() pacienteEscolhido: any

  public dadospacienteFormulario : FormGroup;
  public ptbr: any;
  public fotopaciente = [];
  public msgs: Message[] = [];

  constructor(private formBuilder : FormBuilder,
              public _messageService: MessageService
             ) { }

  ngOnInit() {



        } 
        



}
