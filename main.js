//JIT
/*
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //aot compiler or jet compiler

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);*/
//AOT
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './aot/app/app.module.ngfactory';
console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
//# sourceMappingURL=main.js.map