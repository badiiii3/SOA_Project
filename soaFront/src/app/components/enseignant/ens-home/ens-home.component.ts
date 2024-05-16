import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/model/Enseignant';
import { EnseignantService } from 'src/app/services/enseignant.service';

@Component({
  selector: 'app-ens-home',
  templateUrl: './ens-home.component.html',
  styleUrls: ['./ens-home.component.css']
})

export class EnsHomeComponent implements OnInit {
  teacherDetails: Enseignant[] = [];

  constructor(private enseignantService: EnseignantService,private router: Router) {}

  ngOnInit() {
    this.loadTeachers();
  }

  loadTeachers() {
    this.enseignantService.getEnseignants().subscribe(
      (resp: any) => {
        console.log('API Response:', resp);

        if (resp && Array.isArray(resp)) {
          this.teacherDetails = resp;
        } else {
          console.error('Invalid response structure. Expected an array.');
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  editTeacher(teacherId: number): void {
    this.router.navigate(['/edit-enseignant', teacherId]);
  }

  deleteTeacher(id: number) {
    this.enseignantService.deleteEnseignant(id).subscribe(() => {
      this.loadTeachers();
    });
  }
}
