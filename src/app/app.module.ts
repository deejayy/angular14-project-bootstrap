import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveConfigModule } from '@deejayy/reactive-config';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ConfigVars } from 'src/app/shared/model/config-vars.model';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveConfigModule.forRoot(ConfigVars, { configPath: environment.config }),
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: false,
        },
      },
    ),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'Angular 14 Bootstrap',
      maxAge: 200,
      logOnly: environment.production,
    }),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-US' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
