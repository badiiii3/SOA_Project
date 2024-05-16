import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadreAdministratif } from '../model/CadreAdministratif';

@Injectable({
  providedIn: 'root'
})
export class CadreAdministratifService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:9090/api/cadresAdministratifs';

  public addCadreAdministratif(cadre: CadreAdministratif): Observable<CadreAdministratif> {
    return this.http.post<CadreAdministratif>(`${this.baseUrl}/add`, cadre);
  }

  public getCadresAdministratifs(): Observable<CadreAdministratif[]> {
    return this.http.get<CadreAdministratif[]>(`${this.baseUrl}/all`);
  }

  public deleteCadreAdministratif(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

  public updateCadreAdministratif(cadre: CadreAdministratif): Observable<CadreAdministratif> {
    return this.http.put<CadreAdministratif>(`${this.baseUrl}/update/${cadre.id}`, cadre);
  }

  public getCadreAdministratifById(id: number): Observable<CadreAdministratif> {
    return this.http.get<CadreAdministratif>(`${this.baseUrl}/get/${id}`);
  }
}
