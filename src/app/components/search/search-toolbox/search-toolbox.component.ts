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
    resetPagination: true
  };
  constructor(public apiCall: ApiCallService,
    public dataStore: AppStoreService,
    private cookieService: CookieService) {
   }

  ngOnInit() {

  }

  getDoctors() {
    this.apiCall.setPostParams(this.doctorSearchParams);
    this.dataStore.storeData(this.apiCall.doPost('doctors_and_drugs', '/alldoctors'));
    this.dataStore.setSearchParameters(this.doctorSearchParams);
    this.dataStore.inProgress = true;
    this.apiCall.setPostParams({'recent_result':[{'search_string':this.doctorSearchParams.name,'userid':this.cookieService.get('email'),'req_param':this.doctorSearchParams,'endpoint':'/alldoctors'}]});	
    this.apiCall.doPost('search_analytics', '/search/recent').subscribe((data) => {	
    }); 

  }


}
