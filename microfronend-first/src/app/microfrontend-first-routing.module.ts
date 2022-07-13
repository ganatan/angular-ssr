import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MicrofrontendFirstComponent } from './microfronend-first.component';

const routes: Routes = [
  {
    path: '',
    component: MicrofrontendFirstComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicrofrontendFirstRoutingModule { }
