package br.spin.crud.atendimentos.models;

import br.spin.crud.atendimentos.repository.AtendimentoRepository;
import org.springframework.data.annotation.Immutable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Immutable
@Table(name = "atendimentos")
public class AtendimentoPersonalizado {

    @Id
    private Integer id;

    private String dtAtendimento;

    private String nomePaciente;

    private String nomeMedico;

    private String nomeUnidade;

    private String statusAtend;

    public AtendimentoPersonalizado(Integer id, String dtAtendimento, String nomePaciente, String nomeMedico, String nomeUnidade, String statusAtend) {
        this.id = id;
        this.dtAtendimento = dtAtendimento;
        this.nomePaciente = nomePaciente;
        this.nomeMedico = nomeMedico;
        this.nomeUnidade = nomeUnidade;
        this.statusAtend = statusAtend;
    }

    public AtendimentoPersonalizado() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDtAtendimento() {
        return dtAtendimento;
    }

    public void setDtAtendimento(String dtAtendimento) {
        this.dtAtendimento = dtAtendimento;
    }

    public String getNomePaciente() {
        return nomePaciente;
    }

    public void setNomePaciente(String nomePaciente) {
        this.nomePaciente = nomePaciente;
    }

    public String getNomeMedico() {
        return nomeMedico;
    }

    public void setNomeMedico(String nomeMedico) {
        this.nomeMedico = nomeMedico;
    }

    public String getNomeUnidade() {
        return nomeUnidade;
    }

    public void setNomeUnidade(String nomeUnidade) {
        this.nomeUnidade = nomeUnidade;
    }

    public String getStatusAtend() {
        return statusAtend;
    }

    public void setStatusAtend(String statusAtend) {
        this.statusAtend = statusAtend;
    }

//    • ID do atendimento
//    • Data do atendimento ( dd/mm/yyyy )
//    • Nome do paciente
//    • Nome do médico
//    • Nome da unidade
//    • Status do atendimento

}
