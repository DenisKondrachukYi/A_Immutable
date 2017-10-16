import { Component, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Map } from 'immutable';

@Component({
  selector: 'app-movie',
  template: `
    <div>
      <h3>{{ title }}</h3>
      <p>
        <label>Actor:</label>
        <span>{{ actor.get('firstName') }} {{ actor.get('lastName') }}</span>
      </p>
    </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent {
  @Input() title: string;
  @Input() actor: Map<string, string>;
}
