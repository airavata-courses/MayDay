import { Component, OnInit } from '@angular/core';
import { AppStoreService } from 'src/app/services/app-store/app-store.service';

@Component({
  selector: 'app-search-result-box',
  templateUrl: './search-result-box.component.html',
  styleUrls: ['./search-result-box.component.css']
})
export class SearchResultBoxComponent implements OnInit {

  doctors = [];
  drugs = [];
  constructor(
    public searchStore: AppStoreService
  ) { }

  ngOnInit() {
    this.searchStore.getData().subscribe((data) => {
      this.doctors = data['data'];
    });
  }

}
