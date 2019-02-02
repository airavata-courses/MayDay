import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angular-6-social-login';

export class EmailErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  emailFormControl: FormControl;
  matcher: EmailErrorStateMatcher;
  hide = true;

  constructor(private socialAuthService: AuthService) {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  
    this.matcher = new EmailErrorStateMatcher();
   }

  ngOnInit() {
  }

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

}
