import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angular-6-social-login';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent {

  constructor( private socialAuthService: AuthService ) {}
  
  socialSignIn() {
    const socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData: SocialUser) => {
        console.log(' Google sign in data : ' , userData);
        // Now sign-in with userData
        // ...
            
      }
    );
  }

  socialSignout() {
    this.socialAuthService.signOut().then((data: any) => {
      console.log(data);
    });
  }
}
