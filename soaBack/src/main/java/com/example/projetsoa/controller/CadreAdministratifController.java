package com.example.projetsoa.controller;

import com.example.projetsoa.entity.CadreAdministratif;
import com.example.projetsoa.service.CadreAdministratifService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cadresAdministratifs")
public class CadreAdministratifController {

    @Autowired
    private CadreAdministratifService cadreAdministratifService;

    @GetMapping("/all")
    public List<CadreAdministratif> getAllCadresAdministratifs() {
        return cadreAdministratifService.getAllCadresAdministratifs();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<CadreAdministratif> getCadreAdministratifById(@PathVariable Long id) {
        CadreAdministratif cadreAdministratif = cadreAdministratifService.getCadreAdministratifById(id);
        if (cadreAdministratif != null) {
            return ResponseEntity.ok(cadreAdministratif);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/add")
    public CadreAdministratif addCadreAdministratif(@RequestBody CadreAdministratif cadreAdministratif) {
        return cadreAdministratifService.addCadreAdministratif(cadreAdministratif);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<CadreAdministratif> updateCadreAdministratif(@PathVariable Long id, @RequestBody CadreAdministratif cadreAdministratif) {
        cadreAdministratif.setId(id);
        CadreAdministratif updatedCadre = cadreAdministratifService.updateCadreAdministratif(cadreAdministratif);
        if (updatedCadre != null) {
            return ResponseEntity.ok(updatedCadre);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("delete/{id}")
    public void deleteEtudiant(@PathVariable Long id) {
        cadreAdministratifService.delete(id);
    }
}
