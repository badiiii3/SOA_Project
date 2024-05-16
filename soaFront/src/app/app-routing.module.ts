import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditEtudiantComponent } from './components/edit-etudiant/edit-etudiant.component';
import { AddEtudiantComponent } from './components/add-etudiant/add-etudiant.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:id', component: EditEtudiantComponent },
  { path: 'add', component: AddEtudiantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
