import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as md5 from 'md5';
import { CookieService } from 'ngx-cookie-service';
import { ApiCallService } from 'src/app/services/api-call/api-call.service';
import { EmailValidatorService } from 'src/app/services/email-validator/email-validator.service';
import { GoogleEventsService } from 'src/app/services/google-events/google-events.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {



  hide = true;
  userLoginDetails: UserLogin;
  constructor(public emailValidator: EmailValidatorService,
    private cookieService: CookieService,
    private router: Router,
    public googleSignin: GoogleEventsService,
    private apiCall: ApiCallService
  ) {
    this.userLoginDetails = {
      email: '',
      password: ''

    };
  }

  ngOnInit() {

  }

  login() {
    this.userLoginDetails['password'] = md5(this.userLoginDetails['password']);
    this.apiCall.setPostParams(this.userLoginDetails);
    this.apiCall.doPost('profile', '/askLogin').subscribe((data: any) => {
      if (data['login'] !== 'success') {
        return;
      }
      this.cookieService.set('google_auth', 'false');
      this.cookieService.set('userId', data['id']);
      this.cookieService.set('email', data['email']);
      this.cookieService.set('imageURL', data['image_url']);
      this.cookieService.set('name', data['name']);
      this.router.navigateByUrl('/home');
    });
  }

}

interface UserLogin {
  email: string;
  password: string;
}
