import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
        'Content-Type':  'application/json'
      })
    };
    this._getWebServiceURL().subscribe((json: any) => {
      console.log(json);
      this.apiEndPoints = {
        'doctors_and_drugs': json['purple'],
        'profile': json['red'],
        'search_analytics': json['blue']
      };
    });
   }

   setPostParams(postParams: any) {
    if(postParams) {
      this.postParams = postParams;
    } else {
      this.postParams = {};
    }
   }

   doPost(endpoint: string, uri: string): Observable<any> {
     console.log(this.apiEndPoints);
    return this.http.post(this.apiEndPoints[endpoint]+uri, this.postParams);
   }

   private _getWebServiceURL(): Observable<any> {
    return this.http.get('assets/api-details.json');
   }

}
