import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = environment.apiUrl;
  private apiName = 'teams';

  constructor(private http: HttpClient) {}
  getTeams(): Observable<any> {
    let params = new HttpParams()
      .set('[populate][availability_status]', 'true')
      .set('[populate][project]', 'true');
    return this.http.get<any>(`${this.apiUrl}/${this.apiName}`, { params });
  }

  createTask(data: any) {
    console.log('START');
    return this.http.post<any>(`${this.apiUrl}/${this.apiName}`, { data });
  }
}
