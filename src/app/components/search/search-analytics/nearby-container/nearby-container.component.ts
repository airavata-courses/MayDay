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
  constructor(private apiCallService: ApiCallService) {
    this.locationObserver = Observable.create((e: any) => this.locationEmitter = e);
  }

  ngOnInit() {
    this.getBrowserLocation();
    this.locationObserver.subscribe((position: number[]) => {
      if(position.length === 0) {
        return;
      }
      const requestParam = { 'location': position.join(',')+',100', 'user_location': position.join(','), 'skip': '0', 'limit': '5' };
      this.apiCallService.setPostParams(requestParam);
      this.apiCallService.doPost('doctors_and_drugs', '/alldoctors').subscribe((data) => {
        this.doctors = data['data'];
      });
      this.apiCallService.doGet('geocode', '&location=' + position.join(',') + '&includeNearestIntersection=true').subscribe((data) => {
        this.browserLocationString = data['results'][0]['locations'][0];
        console.log(this.browserLocationString);
      });
      
    });

  }

  getBrowserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        this.locationEmitter.next([position.coords.latitude, position.coords.longitude]);
      }, (error) => {
        console.log(error);
        this.locationEmitter.next([40.7128, -74.0060]);
        this.browserLocationString = 'Allow Location Access';
       });
    } else {
      console.log('navigator is not defined on this browser');
    }
  }
}
