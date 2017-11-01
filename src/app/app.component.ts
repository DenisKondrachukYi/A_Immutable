import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Map } from 'immutable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  htmlTemp = '<p>Hello</p>';
  slogan = 'Just movie information';
  title = 'Terminator 1';
  actor = Map({
    firstName: 'Arnold',
    lastName: 'Schwarzenegger',
  });

  getHTML(e) {
    console.log(e);
  }

  changeActor() {
    this.actor = this.actor.merge({
      firstName: 'Nicholas',
      lastName: 'DIEEEGO',
    });
    console.log(this.actor);
  }
}
