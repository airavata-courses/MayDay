import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCallService } from 'src/app/services/api-call/api-call.service';

@Component({
  selector: 'app-nearby-container',
  templateUrl: './nearby-container.component.html',
  styleUrls: ['./nearby-container.component.css']
})
export class NearbyContainerComponent implements OnInit {

  doctors= [];
  constructor(private apiCallService: ApiCallService) { }

  ngOnInit() {
    const requestParam = {'location':'37.773,-122.413,100','user_location':'37.773,-122.413','skip':'0','limit':'5'};
    this.apiCallService.setPostParams(requestParam);
    this.apiCallService.doPost('doctors_and_drugs', '/alldoctors').subscribe((data) => {
      this.doctors = data['data'];
    });
  }
}
