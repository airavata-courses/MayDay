import { Component, OnInit, Input } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call/api-call.service';
import { AppStoreService } from 'src/app/services/app-store/app-store.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-search-toolbox',
  templateUrl: './search-toolbox.component.html',
  styleUrls: ['./search-toolbox.component.css']
})
export class SearchToolboxComponent implements OnInit {

  doctorSearchParams: any = {
    name : '',
    location : '',
    user_location: '',
    skip: 0,
    limit: 5,
  };

  constructor(public apiCall: ApiCallService,
    private dataStore: AppStoreService,
    private cookieService: CookieService) {
   }

  ngOnInit() {

  }

  getDoctors() {
    this.doctorSearchParams['location'] = '37.773,-122.413,100';
    this.doctorSearchParams['user_location'] = '37.773,-122.413';
    this.apiCall.setPostParams(this.doctorSearchParams);
    this.dataStore.storeData(this.apiCall.doPost('doctors_and_drugs', '/alldoctors'));
    this.dataStore.setSearchParameters(this.doctorSearchParams);
    this.apiCall.setPostParams({'recent_result':[{'search_string':this.doctorSearchParams.name,'userid':this.cookieService.get('email'),'req_param':this.doctorSearchParams,'endpoint':'/alldoctors'}]});	
    this.apiCall.doPost('search_analytics', '/search/recent').subscribe((data) => {	
    }); 

  }


}
