import { Component, OnInit, Input } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call/api-call.service';
import { AppStoreService } from 'src/app/services/app-store/app-store.service';
@Component({
  selector: 'app-search-toolbox',
  templateUrl: './search-toolbox.component.html',
  styleUrls: ['./search-toolbox.component.css']
})
export class SearchToolboxComponent implements OnInit {
  
  searchObj : {
    doctor_name : string,
    drug_name : string,
    zip_code:string,
    practice:string
  };

  constructor(public apiCall: ApiCallService,
    private dataStore: AppStoreService) {
   }

  ngOnInit() {

  }

  getDoctors() {
    const requestParam = {'name':this.searchObj,'location':'37.773,-122.413,100','user_location':'37.773,-122.413','skip':'0','limit':'10'};
    this.apiCall.setPostParams(requestParam);
    this.dataStore.storeData(this.apiCall.doPost('doctors_and_drugs', '/alldoctors'));

    this.apiCall.setPostParams({'recent_result':[{'search_string':this.searchObj,'userid':'abc@gmail.com','req_param':requestParam,'endpoint':'/alldoctors'}]});	
    this.apiCall.doPost('search_analytics', '/search/recent').subscribe((data) => {	
    });
  }

}
