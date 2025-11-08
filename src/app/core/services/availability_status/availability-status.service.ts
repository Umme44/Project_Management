import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AvailabilityStatusService {
  private apiUrl = environment.apiUrl;
  private apiName = 'current-positions';

  constructor(private http: HttpClient) {}

  getavailabilit_status(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${this.apiName}`);
  }
}
