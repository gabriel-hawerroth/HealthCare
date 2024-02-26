package br.spin.crud.controllers;

import br.spin.crud.models.Unidade;
import br.spin.crud.services.UnidadeService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("unidades")
public class UnidadeController {

    private final UnidadeService unidadeService;

    @GetMapping
    private List<Unidade> listaUnidadesQuery(@RequestParam long userId) {
        return unidadeService.listaUnidadesQuery(userId);
    }

    @GetMapping("/{id}")
    private Unidade getById(@PathVariable long id){
        return unidadeService.getById(id);
    }

    @PostMapping
    private ResponseEntity<Unidade> criarUnidade(@RequestBody Unidade unidade) {
        return unidadeService.criarUnidade(unidade);
    }

    @PutMapping
    private ResponseEntity<Unidade> salvarUnidade(@RequestBody Unidade unidade) {
        return unidadeService.salvarUnidade(unidade);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Void> excluirUnidade(@PathVariable long id) {
        return unidadeService.excluirUnidade(id);
    }
}
