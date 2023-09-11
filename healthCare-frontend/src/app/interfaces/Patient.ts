export interface Patient {
  id?: number;
  dsNome: string;
  nr_cpf: string;
  dt_nascimento: Date;
  nr_celular?: string;
  status?: string;
  nome_mae?: string;
  nome_pai?: string;
  genero?: string;
  estado_civil?: string;
  nacionalidade?: string;
  etnia?: string;
  religiao?: string;
  peso_kg?: string;
  altura_cm?: string;
  email?: string;
  alergias?: string;
  dependencia?: string;
  permite_atend_online?: boolean;
  obs_diagnostico?: string;
  dt_inicio_atend?: Date;
  dt_fim_atend?: Date;
  estoque_empenhado?: boolean;
  guarda_compartilhada?: boolean;
  genero_pref?: string;
  idade_min?: string;
  idade_max?: string;
  obs_preferencias?: string;
  nr_cep: string;
  estado?: string;
  cidade?: string;
  bairro?: string;
  endereco?: string;
  nr_endereco?: string;
  complemento?: string;
  como_chegar?: string;
  ieSituacao?: string;
  dt_criacao: Date;
  userId: number;
}
