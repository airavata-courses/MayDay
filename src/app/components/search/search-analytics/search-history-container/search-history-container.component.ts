import { Component, OnInit, Input } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call/api-call.service';

@Component({
  selector: 'app-search-history-container',
  templateUrl: './search-history-container.component.html',
  styleUrls: ['./search-history-container.component.css']
})
export class SearchHistoryContainerComponent implements OnInit {
  @Input() recent_search: any;
  constructor(public apiCall: ApiCallService) { }

  ngOnInit() {
   
  }

  getData(){
    this.apiCall.doGet('search_analytics', '/search/recent').subscribe((data) => {
      console.log("get data - "+JSON.stringify(data));

      this.recent_search = data["recent_result"];
    });
  }

}
