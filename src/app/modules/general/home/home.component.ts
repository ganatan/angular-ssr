import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

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

  constructor() {
    this.features =
      [
        {
          name: 'Template Driven Forms',
          description: 'Build an Angular form with a component and template',
          icon: 'far fa-file-alt',
          link: 'template-driven-forms'
        },
        {
          name: 'Chart.js',
          description: 'Simple yet flexible JavaScript charting for designers & developers',
          icon: 'fa-share-alt-square',
          link: 'chartjs'
        },
        {
          name: 'Components',
          description: 'Define and control views',
          icon: 'fa-share-alt-square',
          link: 'components'
        },
        {
          name: 'Services',
          description: 'A great way to share information among classes',
          icon: 'fa-address-card',
          link: 'services'
        },
        {
          name: 'HttpClient',
          description: 'HttpClient',
          icon: 'fa-comment-alt',
          link: 'httpclient'
        },
        {
          name: 'Directives',
          description: 'Change the appearance or behavior of a DOM element',
          icon: 'fa-text-width',
          link: 'directives'
        },
        {
          name: 'Pipes',
          description: 'Write display-value transformations',
          icon: 'fa-code',
          link: 'pipes'
        },
        {
          name: 'RxJS/Observables',
          description: 'Provide support for passing messages between publishers and subscribers',
          icon: 'fa-comment-alt',
          link: 'observables'
        },
        {
          name: 'modal',
          description: 'Add dialogs to your site',
          icon: 'fa-comment-alt',
          link: 'modal'
        },
        {
          name: 'Reactiveform',
          description: 'Create Reactive Form',
          icon: 'fa-comment-alt',
          link: 'reactiveform'
        },
        {
          name: 'Template Driven Form',
          description: 'Create Template Driven Form',
          icon: 'fa-comment-alt',
          link: 'templatedriven'
        },
      ];

  }

  ngOnInit() {
  }

}