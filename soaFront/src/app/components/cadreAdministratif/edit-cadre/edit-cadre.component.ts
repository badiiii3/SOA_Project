import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadreAdministratif } from 'src/app/model/CadreAdministratif';
import { CadreAdministratifService } from 'src/app/services/cadre-administratif.service';

@Component({
  selector: 'app-edit-cadre',
  templateUrl: './edit-cadre.component.html',
  styleUrls: ['./edit-cadre.component.css']
})

export class EditCadreComponent implements OnInit {
  staff: CadreAdministratif = { id: 0, nom: '', prenom: '', fonction: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cadreAdministratifService: CadreAdministratifService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const staffId = +params['id']; // Extract id from route parameter
      this.loadStaff(staffId);
    });
  }

  loadStaff(staffId: number): void {
    this.cadreAdministratifService.getCadreAdministratifById(staffId).subscribe(staff => {
      this.staff = staff;
    });
  }

  onSubmit(): void {
    console.log(this.staff);
    
    this.cadreAdministratifService.updateCadreAdministratif(this.staff).subscribe(
      () => {
        console.log('Staff updated successfully');
        this.router.navigate(['/cadre-administratif']);
      },
      (error) => {
        console.error('Error updating staff:', error);
      }
    );
  }
}
