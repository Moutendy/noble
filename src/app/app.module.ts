import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SecuritekeycloakService} from "./securitekeycloak.service";
import {TokenAdapterService} from "./token-adapter.service";
import {PvcdecisionService} from "./views/pages/form-elements/pvc-decission/pvcdecision.service";
function KcFactory(kcSecurity : SecuritekeycloakService) {
  return ()=>kcSecurity.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgxPaginationModule,
    HttpClientModule,

  ],
  providers: [
    PvcdecisionService,
    AuthGuard,
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    },SecuritekeycloakService,
    {
      provide:APP_INITIALIZER,
      deps:[SecuritekeycloakService],
      useFactory:KcFactory,
      multi:true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenAdapterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
