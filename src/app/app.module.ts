import * as Raven from 'raven-js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie.component';

Raven.config(
  'https://4c60e9e360f4495aa7527a88ebcd5216@sentry.io/233503'
).install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    Raven.captureException(err);
  }
}

@NgModule({
  declarations: [AppComponent, MovieComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [{ provide: ErrorHandler, useClass: RavenErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
