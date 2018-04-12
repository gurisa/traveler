import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatGridListModule,
  MatMenuModule, MatToolbarModule, MatIconModule,
  MatCardModule, MatSidenavModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    FlexLayoutModule,
    BrowserAnimationsModule, MatButtonModule,
    MatGridListModule, MatMenuModule,
    MatToolbarModule, MatIconModule,
    MatCardModule, MatSidenavModule
  ],
  exports: [
    FlexLayoutModule,
    BrowserAnimationsModule, MatButtonModule,
    MatGridListModule, MatMenuModule,
    MatToolbarModule, MatIconModule,
    MatCardModule, MatSidenavModule
  ],
})
export class MaterialModule { }
