import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditEtudiantComponent } from './components/edit-etudiant/edit-etudiant.component';
import { FormsModule } from '@angular/forms';
import { AddEtudiantComponent } from './components/add-etudiant/add-etudiant.component';
import { EnsHomeComponent } from './components/enseignant/ens-home/ens-home.component';
import { AddEnseignantComponent } from './components/enseignant/add-enseignant/add-enseignant.component';
import { EditEnseignantComponent } from './components/enseignant/edit-enseignant/edit-enseignant.component';
import { CadreHomeComponent } from './components/cadreAdministratif/cadre-home/cadre-home.component';
import { AddCadreComponent } from './components/cadreAdministratif/add-cadre/add-cadre.component';
import { EditCadreComponent } from './components/cadreAdministratif/edit-cadre/edit-cadre.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditEtudiantComponent,
    AddEtudiantComponent,
    EnsHomeComponent,
    AddEnseignantComponent,
    EditEnseignantComponent,
    CadreHomeComponent,
    AddCadreComponent,
    EditCadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
