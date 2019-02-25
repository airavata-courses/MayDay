import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiCallService } from 'src/app/services/api-call/api-call.service';

@Component({
  selector: 'app-nearby-container',
  templateUrl: './nearby-container.component.html',
  styleUrls: ['./nearby-container.component.css']
})
export class NearbyContainerComponent implements OnInit {

  doctors = [];
  browserLocationString: string;
  locationEmitter: any;
  locationObserver: Observable<any>;
  geoCoder: any;
  constructor(private apiCallService: ApiCallService) {}

  ngOnInit() {
    this.apiCallService.doGet('ipinfo', '').subscribe((ipinfo)=>{
      const position = ipinfo['loc'];
      const requestParam = { 'location': position+',100', 'user_location': position, 'skip': '0', 'limit': '5' };
      this.apiCallService.setPostParams(requestParam);
      this.apiCallService.doPost('doctors_and_drugs', '/alldoctors').subscribe((data) => {
        this.doctors = data['data'];
      });
      this.apiCallService.doGet('geocode', '&location=' + position + '&includeNearestIntersection=true').subscribe((data) => {
        this.browserLocationString = data['results'][0]['locations'][0];
        console.log(this.browserLocationString);
      });
    });
  }

}
