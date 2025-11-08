import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiUrl = environment.apiUrl;
  private apiName = 'projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    let params = new HttpParams()
      .set('[populate][current_position]', 'true')
      .set('[populate][team]', 'true');
    return this.http.get<any>(`${this.apiUrl}/${this.apiName}`, { params });
  }

  createProjects(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${this.apiName}`, { data });
  }
}
