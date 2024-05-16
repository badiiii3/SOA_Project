import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditEtudiantComponent } from './components/edit-etudiant/edit-etudiant.component';
import { AddEtudiantComponent } from './components/add-etudiant/add-etudiant.component';
import { AddEnseignantComponent } from './components/enseignant/add-enseignant/add-enseignant.component';
import { EditEnseignantComponent } from './components/enseignant/edit-enseignant/edit-enseignant.component';
import { CadreHomeComponent } from './components/cadreAdministratif/cadre-home/cadre-home.component';
import { AddCadreComponent } from './components/cadreAdministratif/add-cadre/add-cadre.component';
import { EditCadreComponent } from './components/cadreAdministratif/edit-cadre/edit-cadre.component';
import { EnsHomeComponent } from './components/enseignant/ens-home/ens-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:id', component: EditEtudiantComponent },
  { path: 'add', component: AddEtudiantComponent },

  { path: 'enseignant', component: EnsHomeComponent }, 
  { path: 'add-enseignant', component: AddEnseignantComponent }, 
  { path: 'edit-enseignant/:id', component: EditEnseignantComponent },

  { path: 'cadre-administratif', component: CadreHomeComponent }, 
  { path: 'add-cadre-administratif', component: AddCadreComponent },
  { path: 'edit-cadre-administratif/:id', component: EditCadreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
