import { Injectable } from '@angular/core';
import { Enseignant } from '../model/Enseignant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:9090/api/enseignants';

  public addEnseignant(enseignant: Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>(`${this.baseUrl}/add`, enseignant);
  }

  public getEnseignants(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(`${this.baseUrl}/all`);
  }

  public deleteEnseignant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  public updateEnseignant(enseignant: Enseignant): Observable<Enseignant> {
    return this.http.put<Enseignant>(`${this.baseUrl}/update/${enseignant.id}`, enseignant);
  }

  public getEnseignantById(id: number): Observable<Enseignant> {
    return this.http.get<Enseignant>(`${this.baseUrl}/get/${id}`);
  }
}
