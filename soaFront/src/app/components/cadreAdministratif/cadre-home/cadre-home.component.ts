import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadreAdministratif } from 'src/app/model/CadreAdministratif';
import { CadreAdministratifService } from 'src/app/services/cadre-administratif.service';

@Component({
  selector: 'app-cadre-home',
  templateUrl: './cadre-home.component.html',
  styleUrls: ['./cadre-home.component.css']
})

export class CadreHomeComponent implements OnInit {

  constructor(private cadreAdministratifService: CadreAdministratifService, private router: Router) { }
  staffDetails: CadreAdministratif[] = [];

  ngOnInit(): void {
    this.loadStaff();
  }

  loadStaff() {
    this.cadreAdministratifService.getCadresAdministratifs().subscribe(
      (resp: any) => {
        console.log('API Response:', resp);

        if (resp && Array.isArray(resp)) {
          this.staffDetails = resp;
        } else {
          console.error('Invalid response structure. Expected an array.');
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  editStaff(staffId: number): void {
    this.router.navigate(['/edit-cadre-administratif', staffId]);
  }

  deleteStaff(staffId: number): void {
    this.cadreAdministratifService.deleteCadreAdministratif(staffId).subscribe(
      () => {
        console.log('Staff deleted successfully');
        this.loadStaff();
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting staff:', error);
      }
    );
  }
}
