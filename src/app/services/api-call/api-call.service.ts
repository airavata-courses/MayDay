import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  httpOptions: any;
  postParams: any;
  apiEndPoints: any;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
      this.apiEndPoints = {
        'doctors_and_drugs': environment.endpoints['purple'],
        'profile': environment.endpoints['red'],
        'search_analytics': environment.endpoints['blue'],
        'geocode': environment.endpoints['geocode']
      };
  }

  setPostParams(postParams: any) {
    if (postParams) {
      this.postParams = postParams;
    } else {
      this.postParams = {};
    }
  }


  doPost(endpoint: string, uri: string): Observable<any> {
    return this.http.post(this.apiEndPoints[endpoint] + uri, this.postParams);
  }

  doGet(endpoint: string, uri: string): Observable<any> {
    if (endpoint !== 'search_analytics') {
      return this.http.get(this.apiEndPoints[endpoint] + uri);
    } else {
      return this.http.get(this.apiEndPoints[endpoint] + uri);
    }
  }

}
