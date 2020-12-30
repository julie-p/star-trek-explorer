import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getData():Observable<any> {
    let url = "http://stapi.co/api/v1/rest/episode/search";
    return this.http.get<any>(url);
  }

  getDetails(uid):Observable<any> {
    let detailUrl = `http://stapi.co/api/v1/rest/episode?uid=${uid}`;
    return this.http.get<any>(detailUrl)
  }
}
