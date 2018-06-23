import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth-guard.service';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { GuestGuard } from './service/guest-guard.service';
// import { HeaderComponent } from './core/header/header.component';
// import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    HomeComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    CoreModule,  
    DashboardModule,
    AppRoutingModule,//must be the last lol
  ],
  providers: [
    AuthService,
    AuthGuard,
    GuestGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
