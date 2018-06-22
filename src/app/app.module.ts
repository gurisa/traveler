import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { RouteComponent } from './route/route.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { CoreComponent } from './core/core.component';
import { MessageComponent } from './core/message/message.component';
import { ModalComponent } from './core/modal/modal.component';
import { GuestGuard } from './service/guest-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    RouteComponent,
    HomeComponent,
    MainComponent,
    CoreComponent,
    MessageComponent,
    ModalComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,  
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
