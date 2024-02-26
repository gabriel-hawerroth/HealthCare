package br.spin.crud.controllers;

import br.spin.crud.models.Atendimento;
import br.spin.crud.models.InterfacesSQL;
import br.spin.crud.services.AtendimentoService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("atendimentos")
public class AtendimentoController {

    private final AtendimentoService atendimentoService;

    @GetMapping
    private List<Atendimento> listaAtendimentos(@RequestParam long userId) {
        return atendimentoService.listaAtendimentos(userId);
    }

    @GetMapping("/atends-person")
    private List<InterfacesSQL.AtendsPerson> listaAtendsPerson(@RequestParam long userId) {
        return atendimentoService.listaAtendsPerson(userId);
    }

    @GetMapping("/{id}")
    private Atendimento getById(@PathVariable(name = "id") long id) {
        return atendimentoService.getById(id);
    }

    @PostMapping
    private ResponseEntity<Atendimento> criarAtendimento(@RequestBody Atendimento atendimento) {
        return atendimentoService.criarAtendimento(atendimento);
    }

    @PutMapping
    private ResponseEntity<Atendimento> editarAtendimento(@RequestBody Atendimento atendimento) {
        return atendimentoService.editarAtendimento(atendimento);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Void> excluirAtendimento(@PathVariable long id) {
        return atendimentoService.excluirAtendimento(id);
    }
}
