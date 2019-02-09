import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  httpOptions: any;
  postParams: any;
  apiEndPoints = {
    'doctors_and_drugs': 'http://localhost:3000',
    'profile': 'http://localhost:8000',
    'search_analytics': 'http://localhost:8080',
    'geocode': 'https://www.mapquestapi.com/geocoding/v1/reverse?'
  };
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    };
    /*this._getWebServiceURL().subscribe((json: any) => {
      this.apiEndPoints = {
        'doctors_and_drugs': json['purple'],
        'profile': json['red'],
        'search_analytics': json['blue'],
        'geocode': ''
      };
    });*/
   }

   setPostParams(postParams: any) {
    if(postParams) {
      this.postParams = postParams;
    } else {
      this.postParams = {};
    }
   }

 

   doPost(endpoint: string, uri: string): Observable<any> {
    return this.http.post(this.apiEndPoints[endpoint]+uri, this.postParams);
   }

   doGet(endpoint: string, uri: string): Observable<any>{
     return this.http.get(this.apiEndPoints[endpoint] + uri + '&key=EvAFDNlMGI6PeGpkR33PAUfF61AvIliz');
   }

   private _getWebServiceURL(): Observable<any> {
    return this.http.get('assets/api-details.json');
   }

}
