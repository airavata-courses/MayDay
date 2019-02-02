import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar/toolbar.component';
import { GoogleLoginComponent } from './components/toolbar/google-login/google-login.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from 'angular-6-social-login';
import { GoogleIconComponent } from './components/toolbar/google-login/icons/google-icon/google-icon.component';

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
    GoogleIconComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    SocialLoginModule
  ],
  providers: [{
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
