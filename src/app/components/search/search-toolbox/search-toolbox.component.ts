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
  }

  constructor(public apiCall: ApiCallService,
    private dataStore: AppStoreService) {
   }

  ngOnInit() {

  }

  getDoctors() {
    console.log(this.searchObj)
    this.apiCall.setPostParams({'name':this.searchObj,'location':'37.773,-122.413,100','user_location':'37.773,-122.413','skip':'0','limit':'10'});
    this.dataStore.storeData(this.apiCall.doPost('doctors_and_drugs', '/alldoctors'));/* .subscribe((data) => {
      var resultset = data["data"];
      var values = Object.keys(resultset).map(function (key) { return resultset[key]; });
      for(var i=0;i<values.length;i++){
        var profile = values[i]["profile"]
        console.log("i - "+JSON.stringify(profile));
        
      }
    });*/
  }

}
