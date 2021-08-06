import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './compartilhado/erro-msg/erro-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpClient, ErrorMsgComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
