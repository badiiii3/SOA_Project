import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditEtudiantComponent } from './components/edit-etudiant/edit-etudiant.component';
import { FormsModule } from '@angular/forms';
import { AddEtudiantComponent } from './components/add-etudiant/add-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditEtudiantComponent,
    AddEtudiantComponent
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
