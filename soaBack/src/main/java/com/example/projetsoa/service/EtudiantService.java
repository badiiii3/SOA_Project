package com.example.projetsoa.service;

import com.example.projetsoa.dao.EtudiantRepository;
import com.example.projetsoa.entity.Etudiant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EtudiantService {

    @Autowired
    private EtudiantRepository etudiantRepository;

    public List<Etudiant> getAllEtudiants() {
        return etudiantRepository.findAll();
    }

    public Etudiant getEtudiantById(Long id) {
        return etudiantRepository.getById(id);
    }

    public void delete(Long id) {
        etudiantRepository.deleteById(id);
    }

    public Etudiant addEtudiant(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    public Etudiant updateEtudiant(Etudiant etudiant) {
        // Add any necessary validation or business logic before updating
        return etudiantRepository.save(etudiant);
    }
}
