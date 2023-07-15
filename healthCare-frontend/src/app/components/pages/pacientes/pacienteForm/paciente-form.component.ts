import { Component, OnInit, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Patient } from 'src/app/Patient';
import { PatientService } from 'src/app/services/paciente/patient.service';
import { EditPatientComponent } from '../editPatient/edit-patient.component';

import * as moment from 'moment-timezone';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-paciente-form',
  templateUrl: 'paciente-form.component.html',
  styleUrls: ['paciente-form.component.scss'],
})
export class PacienteFormComponent implements OnInit {
  @Input() patientData: Patient | null = null;

  patientForm!: FormGroup;
  pageType?: string;
  patient?: Patient;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private patientService: PatientService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.pageType = this.route.snapshot.paramMap.get('id') || 'Novo';

    this.patientForm = this.formBuilder.group({
      id: new FormControl(this.patientData ? this.patientData.id : ''),
      ds_nome: new FormControl(
        this.patientData ? this.patientData.ds_nome : '',
        [Validators.required]
      ),
      nr_rg: new FormControl(this.patientData ? this.patientData.nr_rg : ''),
      nr_cpf: new FormControl(this.patientData ? this.patientData.nr_cpf : '', [
        Validators.required,
      ]),
      dt_nascimento: new FormControl(
        this.patientData ? this.patientData.dt_nascimento : '',
        [Validators.required]
      ),
      nr_celular: new FormControl(
        this.patientData ? this.patientData.nr_celular : ''
      ),
      status: new FormControl(this.patientData ? this.patientData.status : ''),
      nome_mae: new FormControl(
        this.patientData ? this.patientData.nome_mae : ''
      ),
      nome_pai: new FormControl(
        this.patientData ? this.patientData.nome_pai : ''
      ),
      genero: new FormControl(this.patientData ? this.patientData.genero : ''),
      estado_civil: new FormControl(
        this.patientData ? this.patientData.estado_civil : ''
      ),
      nacionalidade: new FormControl(
        this.patientData ? this.patientData.nacionalidade : ''
      ),
      etnia: new FormControl(this.patientData ? this.patientData.etnia : ''),
      religiao: new FormControl(
        this.patientData ? this.patientData.religiao : ''
      ),
      peso_kg: new FormControl(
        this.patientData ? this.patientData.peso_kg : ''
      ),
      altura_cm: new FormControl(
        this.patientData ? this.patientData.altura_cm : ''
      ),
      email: new FormControl(this.patientData ? this.patientData.email : ''),
      alergias: new FormControl(
        this.patientData ? this.patientData.alergias : ''
      ),
      dependencia: new FormControl(
        this.patientData ? this.patientData.dependencia : ''
      ),
      permite_atend_online: new FormControl(
        this.patientData ? this.patientData.permite_atend_online : ''
      ),
      obs_diagnostico: new FormControl(
        this.patientData ? this.patientData.obs_diagnostico : ''
      ),
      dt_inicio_atend: new FormControl(
        this.patientData ? this.patientData.dt_inicio_atend : ''
      ),
      dt_fim_atend: new FormControl(
        this.patientData ? this.patientData.dt_fim_atend : ''
      ),
      estoque_empenhado: new FormControl(
        this.patientData ? this.patientData.estoque_empenhado : ''
      ),
      guarda_compartilhada: new FormControl(
        this.patientData ? this.patientData.guarda_compartilhada : ''
      ),
      genero_pref: new FormControl(
        this.patientData ? this.patientData.genero_pref : ''
      ),
      idade_min: new FormControl(
        this.patientData ? this.patientData.idade_min : ''
      ),
      idade_max: new FormControl(
        this.patientData ? this.patientData.idade_max : ''
      ),
      obs_preferencias: new FormControl(
        this.patientData ? this.patientData.obs_preferencias : ''
      ),
      nr_cep: new FormControl(this.patientData ? this.patientData.nr_cep : '', [
        Validators.required,
      ]),
      estado: new FormControl(this.patientData ? this.patientData.estado : ''),
      cidade: new FormControl(this.patientData ? this.patientData.cidade : ''),
      bairro: new FormControl(this.patientData ? this.patientData.bairro : ''),
      endereco: new FormControl(
        this.patientData ? this.patientData.endereco : ''
      ),
      nr_endereco: new FormControl(
        this.patientData ? this.patientData.nr_endereco : ''
      ),
      complemento: new FormControl(
        this.patientData ? this.patientData.complemento : ''
      ),
      como_chegar: new FormControl(
        this.patientData ? this.patientData.como_chegar : ''
      ),
      ie_situacao: new FormControl(
        this.patientData ? this.patientData.ie_situacao : ''
      ),
    });

    console.log('patientData:');
    console.log(this.patientData);

    if (this.patientData) {
      this.patientForm.patchValue(this.patientData);
    }
  }

  savePatient() {
    if (this.patientForm.invalid) {
      console.log('Formulário inválido.');
      this.snackBar.open('Não foi possível salvar as informações.', '', {
        duration: 4500,
      });
    } else {
      console.log(this.patientForm.value);
      this.patientService.createPatient(this.patientForm.value).subscribe({
        next: (result) => {
          this.snackBar.open('Paciente salvo com sucesso.', '', {
            duration: 4000,
          }),
            this.router.navigate(['/paciente']);
        },
        error: (error) => {
          this.snackBar.open('Não foi possível salvar as informações.', '', {
            duration: 4500,
          });
        },
      });
    }
  }

  removePatient(event: Event) {
    if (event.type == 'click') {
      console.log('Funcionando');
    }
  }
}
