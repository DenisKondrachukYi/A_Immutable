import { Component, OnInit } from '@angular/core';
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  slogan = 'Just movie information';
  title = 'Terminator 1';
  actor = Map({
    firstName: 'Arnold',
    lastName: 'Schwarzenegger',
  });

  changeActor() {
    this.actor = this.actor.merge({
      firstName: 'Nicholas',
      lastName: 'DIEEEGO',
    });
    console.log(this.actor);
  }
}
