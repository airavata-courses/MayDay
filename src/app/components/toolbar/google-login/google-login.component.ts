import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angular-6-social-login';
import { GoogleEventsService } from 'src/app/services/google-events/google-events.service';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent {

  constructor(private googleSignup: GoogleEventsService) {}
  
  
}
