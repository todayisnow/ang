import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //aot compiler or jet compiler

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
