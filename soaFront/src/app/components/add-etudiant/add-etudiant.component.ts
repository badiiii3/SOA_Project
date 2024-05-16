import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from 'src/app/model/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
  student: Etudiant = { nom: '', prenom: '', classe: '', reussite: false, nbAbsences: 0 };

  constructor(
    private router: Router,
    private etudiantService: EtudiantService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.student);
    
    this.etudiantService.addEtudiant(this.student).subscribe(
      () => {
        console.log('Student added successfully');
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error adding student:', error);
      }
    );
  }


}
