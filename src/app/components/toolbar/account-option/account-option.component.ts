import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GoogleEventsService } from 'src/app/services/google-events/google-events.service';

@Component({
  selector: 'app-account-option',
  templateUrl: './account-option.component.html',
  styleUrls: ['./account-option.component.css']
})
export class AccountOptionComponent implements OnInit {

  constructor(public cookieService: CookieService,
    private router: Router,
    private googleService: GoogleEventsService) { }

  ngOnInit() {
  }

  logout() {
    if (this.cookieService.get('google_auth') === 'true') {
      this.googleService.socialSignout();
    }
    else {
      this.cookieService.deleteAll();
      this.router.navigateByUrl('/').then(() => {
      }).catch((err) => {
        console.log(err);
      });
    }
  }
}
