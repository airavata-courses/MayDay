import { Component, OnInit } from '@angular/core';
import { AppStoreService } from 'src/app/services/app-store/app-store.service';

@Component({
  selector: 'app-nearby-container',
  templateUrl: './nearby-container.component.html',
  styleUrls: ['./nearby-container.component.css']
})
export class NearbyContainerComponent implements OnInit {

  doctors = []
  constructor(private dataStore: AppStoreService) { }

  ngOnInit() {
    this.dataStore.getData().subscribe((data)=> {
      console.log(data);
      this.doctors = data['data']
    })
  }

}
