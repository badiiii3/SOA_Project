import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadreAdministratif } from 'src/app/model/CadreAdministratif';
import { CadreAdministratifService } from 'src/app/services/cadre-administratif.service';

@Component({
  selector: 'app-add-cadre',
  templateUrl: './add-cadre.component.html',
  styleUrls: ['./add-cadre.component.css']
})

export class AddCadreComponent implements OnInit {
  staff: CadreAdministratif = { nom: '', prenom: '', fonction: '' };

  constructor(
    private router: Router,
    private cadreAdministratifService: CadreAdministratifService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.staff);
    
    this.cadreAdministratifService.addCadreAdministratif(this.staff).subscribe(
      () => {
        console.log('Staff added successfully');
        this.router.navigate(['/cadre-administratif']);
      },
      (error) => {
        console.error('Error adding staff:', error);
      }
    );
  }
}

