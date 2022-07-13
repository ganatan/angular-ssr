import { NgModule } from '@angular/core';
import { MicrofrontendFirstComponent } from './microfronend-first.component';
import { MicrofrontendFirstRoutingModule } from './microfrontend-first-routing.module';

@NgModule({
    declarations: [
        MicrofrontendFirstComponent
    ],
    imports: [
        MicrofrontendFirstRoutingModule
    ]
})
export class MicrofrontendFirstModule {}
