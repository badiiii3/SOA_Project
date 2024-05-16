package com.example.projetsoa.service;

import com.example.projetsoa.dao.CadreAdministratifRepository;
import com.example.projetsoa.entity.CadreAdministratif;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CadreAdministratifService {

    @Autowired
    private CadreAdministratifRepository cadreAdministratifRepository;

    public List<CadreAdministratif> getAllCadresAdministratifs() {
        return cadreAdministratifRepository.findAll();

    }

    public void delete(Long id) {
        cadreAdministratifRepository.deleteById(id);
    }

    public CadreAdministratif getCadreAdministratifById(Long id) {
        return cadreAdministratifRepository.findById(id).orElse(null);
    }



    public CadreAdministratif addCadreAdministratif(CadreAdministratif cadreAdministratif) {
        return cadreAdministratifRepository.save(cadreAdministratif);
    }

    public CadreAdministratif updateCadreAdministratif(CadreAdministratif cadreAdministratif) {
        CadreAdministratif existingCadre = cadreAdministratifRepository.findById(cadreAdministratif.getId()).orElse(null);
        if (existingCadre != null) {
            if (cadreAdministratif.getNom() != null) {
                existingCadre.setNom(cadreAdministratif.getNom());
            }
            if (cadreAdministratif.getPrenom() != null) {
                existingCadre.setPrenom(cadreAdministratif.getPrenom());
            }
            if (cadreAdministratif.getFonction() != null) {
                existingCadre.setFonction(cadreAdministratif.getFonction());
            }

            return cadreAdministratifRepository.save(existingCadre);
        }
        return null;
    }
}
