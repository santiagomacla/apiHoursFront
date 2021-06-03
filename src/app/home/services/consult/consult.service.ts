import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from '../../interface/consulta.interface';

@Injectable({
  providedIn: 'root',
})
export class ConsultService {
  baseUrl = 'https://calculate-hours.herokuapp.com/consult/report';

  constructor(private http: HttpClient) {}

  getData(id: string, sem: number): Observable<Consulta> {
    return this.http.get<Consulta>(`${this.baseUrl}/${id}?sem=${sem}`);
  }
}
