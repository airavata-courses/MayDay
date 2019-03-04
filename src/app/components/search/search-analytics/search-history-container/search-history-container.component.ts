import { Component, OnInit, Input } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call/api-call.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-search-history-container',
  templateUrl: './search-history-container.component.html',
  styleUrls: ['./search-history-container.component.css']
})
export class SearchHistoryContainerComponent implements OnInit {
  recent_search: any;
  frequency: any;
  constructor(public apiCall: ApiCallService,
    private cookieService: CookieService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    setTimeout(() => {
      this.apiCall.doGet('search_analytics', '/search/all'+'?userid='+this.cookieService.get('email')).subscribe((data) => {
        this.recent_search = data['recent_result'];
        // this.frequency = this.recent_search.frequency;
      });
    }, 600);
    
  }

}
