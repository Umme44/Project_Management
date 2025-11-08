import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private apiUrl = environment.apiUrl;
  private apiName = 'teams';

  constructor(private http: HttpClient) {}

  getTeams(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${this.apiName}`);
  }

  createTeam(data: any) {
    return this.http.post<any>(`${this.apiUrl}/${this.apiName}`, { data });
  }
}
