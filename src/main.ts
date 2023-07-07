import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UtilitiesModule } from './app/utilities.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(UtilitiesModule);