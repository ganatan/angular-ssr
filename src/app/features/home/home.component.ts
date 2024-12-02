import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { environment } from '../../../environments/environment';

import { Feature } from './feature';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = environment.application.name;
  version = environment.application.version;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: Feature[];

  constructor() {
    this.features =
      [
        {
          name: 'Bootstrap',
          description: 'How to use Buttons, Alerts, Pagination, Tables, Collapses',
          icon: 'fab fa-bootstrap',
          link: 'bootstrap'
        },
        {
          name: 'Components',
          description: 'Channel component with Input, Output and Event Emitter',
          icon: 'far fa-clone',
          link: 'components'
        },
        {
          name: 'Services',
          description: 'Use services to view a playlist and a youtube player',
          icon: 'fas fa-handshake',
          link: 'services'
        },
        {
          name: 'Reactive Forms',
          description: 'A model-driven approach to handling form inputs',
          icon: 'far fa-file-alt',
          link: 'forms'
        },
        {
          name: 'Template Driven',
          description: 'Forms are the mainstay of business applications',
          icon: 'far fa-file-alt',
          link: 'forms'
        },
      ];
  }

}
