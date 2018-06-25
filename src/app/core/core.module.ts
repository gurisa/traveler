import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MessageComponent } from './message/message.component';
import { ModalComponent } from './modal/modal.component';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MessageComponent,
    ModalComponent,
    CoreComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MessageComponent,
    ModalComponent,
    CoreComponent
  ]
})
export class CoreModule { }
