import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainPageModule } from './app/main-page.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(MainPageModule);