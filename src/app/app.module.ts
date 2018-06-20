import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { RouteComponent } from './route/route.component';
import { HomeComponent } from './home/home.component';
import { CoreComponent } from './core/core.component';
import { MainComponent } from './main/main.component';


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
    CoreComponent,
    MainComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,    
    DashboardModule,
    AppRoutingModule,//must be the last lol
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
