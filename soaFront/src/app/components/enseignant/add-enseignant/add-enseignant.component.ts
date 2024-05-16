import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/model/Enseignant';
import { EnseignantService } from 'src/app/services/enseignant.service';

@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.css']
})
export class AddEnseignantComponent implements OnInit {
  teacher: Enseignant = { nom: '', prenom: '', matiere: '' };

  constructor(
    private router: Router,
    private enseignantService: EnseignantService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.teacher);
    
    this.enseignantService.addEnseignant(this.teacher).subscribe(
      () => {
        console.log('Teacher added successfully');
        this.router.navigate(['/enseignant']);
      },
      (error) => {
        console.error('Error adding teacher:', error);
      }
    );
  }
}
