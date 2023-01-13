import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

import { NglibModule } from '@imported-libs/nglib';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, NglibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
