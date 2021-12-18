import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: object) {
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

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      let navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function () {
          if (navMain) {
            navMain.classList.remove("show");
          }
        }
      }
    }

  }

}