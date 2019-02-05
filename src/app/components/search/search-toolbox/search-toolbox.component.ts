import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call/api-call.service';
@Component({
  selector: 'app-search-toolbox',
  templateUrl: './search-toolbox.component.html',
  styleUrls: ['./search-toolbox.component.css']
})
export class SearchToolboxComponent implements OnInit {

  constructor(public apiCall: ApiCallService) {
   }

  ngOnInit() {

  }

  getDoctors() {
    this.apiCall.setPostParams({'location':'37.773,-122.413,100','user_location':'37.773,-122.413','skip':'0','limit':'10'});
    this.apiCall.doPost('doctors_and_drugs', '/alldoctors',).subscribe((data) => {
      console.log(data);
    });
  }

}
