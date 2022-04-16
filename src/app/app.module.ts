import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import ngx-theteller module
import { NgxThetellerModule } from 'ngx-theteller';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // add ngx-theteller module
    NgxThetellerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
