import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/model/Enseignant';
import { EnseignantService } from 'src/app/services/enseignant.service';

@Component({
  selector: 'app-edit-enseignant',
  templateUrl: './edit-enseignant.component.html',
  styleUrls: ['./edit-enseignant.component.css']
})
export class EditEnseignantComponent implements OnInit {
  teacher: Enseignant = { id: 0, nom: '', prenom: '', matiere: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private enseignantService: EnseignantService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const teacherId = +params['id']; // Extract id from route parameter
      this.loadTeacher(teacherId);
    });
  }

  loadTeacher(teacherId: number): void {
    this.enseignantService.getEnseignantById(teacherId).subscribe(teacher => {
      this.teacher = teacher;
    });
  }

  onSubmit(): void {
    console.log(this.teacher);
    
    this.enseignantService.updateEnseignant(this.teacher).subscribe(
      () => {
        console.log('Teacher updated successfully');
        this.router.navigate(['/enseignant']);
      },
      (error) => {
        console.error('Error updating teacher:', error);
      }
    );
  }
}
