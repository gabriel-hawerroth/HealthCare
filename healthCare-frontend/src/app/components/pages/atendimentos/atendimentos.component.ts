import { Component, OnInit } from '@angular/core';

import { Atendimento } from 'src/app/Atendimento';
import { AtendimentoService } from 'src/app/services/atendimento/atendimento.service';
import { environment } from 'src/environments/environment';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-atendimentos',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.scss'],
})
export class AtendimentosComponent implements OnInit {
  allAtends: Atendimento[] = [];
  atends: Atendimento[] = [];

  baseApiUrl = environment.baseApiUrl;

  faSearch = faSearch;
  searchTerm: string = '';

  rows = [this.allAtends];
  columns = [
    { prop: 'dtAtendimento', name: 'Data do atendimento' },
    { prop: 'nomePaciente', name: 'Paciente' },
    { prop: 'nomeMedico', name: 'Nome do médico' },
    { prop: 'nomeUnidade', name: 'Nome da unidade' },
    { prop: 'statusAtend', name: 'Status do atendimento' },
  ];

  constructor(private atendimentoService: AtendimentoService) {}
  ngOnInit(): void {
    this.atendimentoService.getAtendimentos().subscribe((items: any) => {
      this.allAtends = items;
      this.atends = items;
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;
  }
}
