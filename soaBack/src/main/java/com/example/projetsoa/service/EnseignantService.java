package com.example.miniprojetserviceweb.Services;

import com.example.miniprojetserviceweb.Model.Enseignant;
import com.example.miniprojetserviceweb.Repository.EnseignantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EnseignantService {

    private final EnseignantRepository enseignantRepository;

    @Autowired
    public EnseignantService(EnseignantRepository enseignantRepository) {
        this.enseignantRepository = enseignantRepository;
    }

    public List<Enseignant> getAllEnseignants() {
        return enseignantRepository.findAll();
    }

    public Optional<Enseignant> getEnseignantById(Long id) {
        return enseignantRepository.findById(id);
    }

    public Enseignant saveEnseignant(Enseignant enseignant) {
        return enseignantRepository.save(enseignant);
    }

    public void deleteEnseignant(Long id) {
        enseignantRepository.deleteById(id);
    }

    // Other methods as needed

}
