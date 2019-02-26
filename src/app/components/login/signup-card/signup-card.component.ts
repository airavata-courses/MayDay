import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as md5 from 'md5';
import { CookieService } from 'ngx-cookie-service';
import { ApiCallService } from 'src/app/services/api-call/api-call.service';
import { EmailValidatorService } from 'src/app/services/email-validator/email-validator.service';
import { GoogleEventsService } from 'src/app/services/google-events/google-events.service';

@Component({
  selector: 'app-signup-card',
  templateUrl: './signup-card.component.html',
  styleUrls: ['./signup-card.component.css']
})
export class SignupCardComponent implements OnInit {

  hide = true;
  @ViewChild('fileInput') inputTag: ElementRef;
  userDetails = {
    name: '',
    email: '',
    password: '' 
  };
  constructor(public emailValidator: EmailValidatorService, public googleSignup: GoogleEventsService,
    private apiCallService: ApiCallService,
    private cookieService: CookieService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  postToService() {
    this.userDetails['password'] = md5(this.userDetails['password']);
    this.apiCallService.setPostParams( this.userDetails);
    this.apiCallService.doPost('profile', '/customer').subscribe((data) => {
      if (data['status'] !== 'success') {
        return;
      }
      this.cookieService.set('google_auth', 'false');
      this.cookieService.set('userId', '123');
      this.cookieService.set('email', this.userDetails['email']);
      this.cookieService.set('imageURL', '');
      this.cookieService.set('name', this.userDetails['name']);
      this.router.navigateByUrl('/home');
    });
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const postParams = new FormData();
    postParams.append('file', file, file.name);
    this.apiCallService.setPostParams(postParams);
    this.apiCallService.doPost('profile', '/upload').subscribe((data) => {
    });
  }

}
