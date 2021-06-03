import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../../interface/report.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateService {
  baseUrl: string = 'https://calculate-hours.herokuapp.com/create/report';

  constructor(private http: HttpClient) {}

  createReport(report: Report): Observable<any> {
    return this.http.post<any>(this.baseUrl, report);
  }
}
