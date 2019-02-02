import { Component } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent {

  constructor( private socialAuthService: AuthService ) {}
  
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform === 'facebook'){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform === 'google'){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+' sign in data : ' , userData);
        // Now sign-in with userData
        // ...
            
      }
    );
  }
}
