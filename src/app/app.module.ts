import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'angular-6-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { GoogleLoginComponent } from './components/toolbar/google-login/google-login.component';
import { GoogleIconComponent } from './components/toolbar/google-login/icons/google-icon/google-icon.component';
import { ToolbarComponent } from './components/toolbar/toolbar/toolbar.component';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('770356566134-q60il9sm8pc1rurh5eb3pifs5ol9hbjt')
        }
      ]
  );
  return config;
}
 

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ToolbarComponent,
    GoogleLoginComponent,
    GoogleIconComponent,
    LoginPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    SocialLoginModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [{
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
