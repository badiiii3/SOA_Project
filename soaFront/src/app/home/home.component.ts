import { Component } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Etudiant } from '../model/Etudiant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  constructor(private etudiantService: EtudiantService,private router: Router){}
  userDetails: Etudiant[] = [];
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(){
    this.etudiantService.getUserDetails().subscribe(
      (resp: any) => {
      console.log('API Response:', resp);

      if (resp && Array.isArray(resp)) {
        this.userDetails = resp;
        
      } else {
        console.error('Invalid response structure. Expected an array.');
      }
    },
    (error: HttpErrorResponse) => {
      console.log(error);
    }
  );
}
editUser(userId: number): void {
  this.router.navigate(['/edit', userId]);
}


  deleteUser(userId: number): void {
    this.etudiantService.deleteUser(userId).subscribe(
      () => {
        console.log('User deleted successfully');
        this.loadUsers();
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting user:', error);
      }
    );
  }


}

