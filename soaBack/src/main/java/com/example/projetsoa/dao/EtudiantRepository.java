package com.example.projetsoa.dao;

import com.example.projetsoa.entity.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
}
