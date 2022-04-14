import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    NgxThetellerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
