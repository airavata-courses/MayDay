import { Injectable } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angular-6-social-login';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GoogleEventsService {

  constructor(private socialAuthService: AuthService, private cookieService: CookieService,
    private router: Router) {

  }
  socialSignIn() {
    const socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData: SocialUser) => {
        this.cookieService.set('userId', userData['id']);
        this.cookieService.set('email', userData['email']);
        this.cookieService.set('imageURL', userData['image']);
        this.cookieService.set('name', userData['name']);
        this.router.navigateByUrl('/home');
      });
  }

  socialSignout() {
    this.socialAuthService.signOut().then((data: any) => {
      this.cookieService.deleteAll();
      this.router.navigateByUrl('/').then(() => {
        console.log('logged out');
      }).catch((err) => {
        console.log(err);
      });
    });
    
  }
}
