package com.example.projetsoa.controller;

import com.example.projetsoa.dao.EtudiantRepository;
import com.example.projetsoa.entity.Etudiant;
import com.example.projetsoa.service.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/etudiants")
public class EtudiantController {
    private EtudiantRepository etudiantRepository;

    @Autowired
    private EtudiantService etudiantService;

    @PostMapping("/add")
    public Etudiant createEtudiant(@RequestBody Etudiant etudiant) {
        return etudiantService.addEtudiant(etudiant);
    }

    @GetMapping("/{id}")
    public Etudiant getEtudiantDetails(@PathVariable Long id) {
        return etudiantService.getEtudiantById(id);
    }

    @PutMapping("/update/{id}")
    public Etudiant updateEtudiant(@PathVariable Long id, @RequestBody Etudiant etudiantDetails) {

        Etudiant etudiant = etudiantService.getEtudiantById(id);
        etudiant.setNom(etudiantDetails.getNom());
        etudiant.setPrenom(etudiantDetails.getPrenom());
        etudiant.setClasse(etudiantDetails.getClasse());
        etudiant.setNbAbsences(etudiantDetails.getNbAbsences());
        etudiant.setReussite(etudiantDetails.isReussite());
        return etudiantService.updateEtudiant(etudiant); // Pour mettre à jour, nous utilisons la même méthode que pour l'ajout
    }

    @GetMapping("/all")
    public List<Etudiant> getAllEtudiants() {
        return etudiantService.getAllEtudiants();
    }

    @DeleteMapping("delete/{id}")
    public void deleteEtudiant(@PathVariable Long id) {
        etudiantService.delete(id);
    }

    @GetMapping("/tauxreussite")
    public ResponseEntity<Double> getTauxRéussite() {
        List<Etudiant> etudiants = etudiantRepository.findAll();
        int totalEtudiants = etudiants.size();
        if (totalEtudiants == 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(0.0);
        }
        long totalReussite = etudiants.stream().filter(Etudiant::isReussite).count();
        double tauxReussite = ((double) totalReussite / totalEtudiants) * 100.0;
        return ResponseEntity.status(HttpStatus.OK).body(tauxReussite);
    }

    @GetMapping("/tauxabsence")
    public ResponseEntity<Double> getTauxAbsentéisme() {
        List<Etudiant> etudiants = etudiantRepository.findAll();
        int totalEtudiants = etudiants.size();
        if (totalEtudiants == 0) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(0.0);
        }
        long totalAbsences = etudiants.stream().filter(e -> e.getNbAbsences() > 0).count();
        double tauxAbsence = ((double) totalAbsences / totalEtudiants) * 100.0;
        return ResponseEntity.status(HttpStatus.OK).body(tauxAbsence);
    }

    @GetMapping("/get/{id}")
    public Etudiant getEtudiantById(@PathVariable Long id) {
        Etudiant etudiant = etudiantService.getEtudiantById(id);
        return etudiant;
    }



}
