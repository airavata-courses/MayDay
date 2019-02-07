import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'angular-6-social-login';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { LoginCardComponent } from './components/login/login-card/login-card.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { SignupCardComponent } from './components/login/signup-card/signup-card.component';
import { NearbyContainerComponent } from './components/search/search-analytics/nearby-container/nearby-container.component';
import { SearchAnalyticsComponent } from './components/search/search-analytics/search-analytics.component';
import {
  SearchHistoryContainerComponent,
} from './components/search/search-analytics/search-history-container/search-history-container.component';
import {
  SearchTrendingContainerComponent,
} from './components/search/search-analytics/search-trending-container/search-trending-container.component';
import { SearchCardLayoutComponent } from './components/search/search-card-layout/doctor-card/search-card-layout.component';
import { SearchResultBoxComponent } from './components/search/search-result-box/search-result-box.component';
import { SearchToolboxComponent } from './components/search/search-toolbox/search-toolbox.component';
import { AccountOptionComponent } from './components/toolbar/account-option/account-option.component';
import { NavbarComponent } from './components/toolbar/navbar/navbar.component';
import { MyMaterialModule } from './material.module';
import { AppStoreService } from './services/app-store/app-store.service';
import { AuthRouterGuardService } from './services/router-guard/auth-router-guard.service';
import { SearchPageComponent } from './components/search/search-page/search-page.component';

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
    LoginPageComponent,
    LoginCardComponent,
    SignupCardComponent,
    NavbarComponent,
    AccountOptionComponent,
    SearchToolboxComponent,
    SearchAnalyticsComponent,
    SearchResultBoxComponent,
    NearbyContainerComponent,
    SearchHistoryContainerComponent,
    SearchTrendingContainerComponent,
    SearchCardLayoutComponent,
    SearchPageComponent

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
    MatDividerModule,
    MatTabsModule,
    MyMaterialModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  },
  CookieService,
  AuthRouterGuardService,
  AppStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
