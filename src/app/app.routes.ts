import { Routes } from '@angular/router';

import { Home } from './modules/pages/home/home';
import { NotFound } from './modules/pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },

  {
    path: 'bootstrap',
    loadChildren: () =>
      import('./modules/examples/bootstrap/tutorial.routes')
        .then(routes => routes.routes)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./modules/pages/login/login')
        .then(mod => mod.Login)
  },

  {
    path: 'signup',
    loadComponent: () =>
      import('./modules/pages/signup/signup')
        .then(mod => mod.Signup)
  },

  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/pages/contact/contact.routes')
        .then(routes => routes.routes)
  },

  {
    path: 'about',
    loadChildren: () =>
      import('./modules/pages/about/about.routes')
        .then(routes => routes.routes)
  },

  {
    path: '**',
    component: NotFound
  }
];

// import { Routes } from '@angular/router';

// import { Home } from './features/home/home';
// import { NotFound } from './features/not-found/not-found';

// export const routes: Routes = [
//   { path: '', component: Home, },

//   {
//     path: 'bootstrap',
//     loadChildren: () => import(`./features/example-bootstrap/tutorial.routes`)
//       .then(routes => routes.routes)
//   },

//   {
//     path: 'login',
//     loadComponent: () => import(`./features/login/login`)
//       .then(mod => mod.Login)
//   },
//   {
//     path: 'signup',
//     loadComponent: () => import(`./features/signup/signup`)
//       .then(mod => mod.Signup)
//   },
  
//   {
//     path: 'contact',
//     loadChildren: () => import(`./features/contact/contact.routes`)
//       .then(routes => routes.routes)
//   },

//   {
//     path: 'about',
//     loadChildren: () => import('./features/about/about.routes')
//     .then(routes => routes.routes)
//   },

//   { path: '**', component: NotFound }
// ];