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
    private googleService: GoogleEventsService) { }

  ngOnInit() {
  }

  logoutFromGoogle() {
    this.googleService.socialSignout();
  }
}
