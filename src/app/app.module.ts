import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebpayService } from './services/webpay.service';
import { HttpClientModule } from '@angular/common/http';
import { WebpayComponent } from './webpay/webpay.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WebpayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WebpayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
