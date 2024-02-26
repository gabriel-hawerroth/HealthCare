package br.spin.crud.controllers;

import br.spin.crud.models.Paciente;
import br.spin.crud.services.PacienteService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("pacientes")
public class PacienteController {

    private final PacienteService pacienteService;

    @GetMapping
    private List<Paciente> listPatients(@RequestParam Long userId) {
        return pacienteService.listPatients(userId);
    }

    @GetMapping("/{id}")
    private Paciente getById(@PathVariable Long id){
        return pacienteService.getById(id);
    }

    @PostMapping
    private ResponseEntity<Paciente> criarPaciente(@RequestBody Paciente paciente) {
        return pacienteService.criarPaciente(paciente);
    }

    @PutMapping
    private ResponseEntity<Paciente> editarPaciente(@RequestBody Paciente paciente) {
        return pacienteService.editarPaciente(paciente);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Void> excluirPaciente(@PathVariable Long id) {
        return pacienteService.excluirPaciente(id);
    }
}
