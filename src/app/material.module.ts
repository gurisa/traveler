import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatGridListModule,
  MatGridListModule, MatMenuModule,
  MatToolbarModule, MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule, MatButtonModule,
    MatGridListModule, MatGridListModule, MatMenuModule,
    MatToolbarModule, MatIconModule
  ],
  exports: [
    BrowserAnimationsModule, MatButtonModule,
    MatGridListModule, MatGridListModule, MatMenuModule,
    MatToolbarModule, MatIconModule
  ],
})
export class MaterialModule { }
