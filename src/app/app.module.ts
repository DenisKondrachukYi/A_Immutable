import * as Raven from 'raven-js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TooltipModule } from './tooltip/tooltip';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie.component';
import { DomHandler } from './tooltip/dom';

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
  imports: [BrowserModule, FormsModule, HttpModule, TooltipModule],
  providers: [
    { provide: ErrorHandler, useClass: RavenErrorHandler },
    DomHandler,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
