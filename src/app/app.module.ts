import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'angular-6-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { LoginCardComponent } from './components/login/login-card/login-card.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { SignupCardComponent } from './components/login/signup-card/signup-card.component';
import { AccountOptionComponent } from './components/toolbar/account-option/account-option.component';
import { NavbarComponent } from './components/toolbar/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar/toolbar.component';
import { SearchComponent } from './components/search/search.component';
import { SearchToolboxComponent } from './components/search/search-toolbox/search-toolbox.component';
import { SearchAnalyticsComponent } from './components/search/search-analytics/search-analytics.component';
import { SearchResultBoxComponent } from './components/search/search-result-box/search-result-box.component';
import { NearbyContainerComponent } from './components/search/search-analytics/nearby-container/nearby-container.component';
import { SearchHistoryContainerComponent } from './components/search/search-analytics/search-history-container/search-history-container.component';
import { SearchTrendingContainerComponent } from './components/search/search-analytics/search-trending-container/search-trending-container.component';

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
    LoginPageComponent,
    LoginCardComponent,
    SignupCardComponent,
    NavbarComponent,
    AccountOptionComponent,
    SearchComponent,
    SearchToolboxComponent,
    SearchAnalyticsComponent,
    SearchResultBoxComponent,
    NearbyContainerComponent,
    SearchHistoryContainerComponent,
    SearchTrendingContainerComponent

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
    MatTabsModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
