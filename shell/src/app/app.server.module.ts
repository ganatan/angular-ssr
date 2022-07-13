import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { DynamicMfConfigFile, parseManifestAndLoadRemoteEntries } from 'src/mf-helper';
import { environment } from 'src/environments/environment';

const MODULE_FEDERATION_MANIFEST = new InjectionToken<DynamicMfConfigFile>('manifest for remote entries info')

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    {
      provide: MODULE_FEDERATION_MANIFEST,
      useValue: environment.microfrontends
    },
    {
      provide: APP_INITIALIZER,
      useFactory: parseManifestAndLoadRemoteEntries,
      deps: [MODULE_FEDERATION_MANIFEST]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
