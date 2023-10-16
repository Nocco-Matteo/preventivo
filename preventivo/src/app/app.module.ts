import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './modules/shared.module';
import { PreventivoEffects } from './store/effects/preventivo.effects';
import { preventivoReducer } from './store/reducers/preventivo.reducers';
import { ServiziComponent } from './components/pages/servizi/servizi.component';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //ngStore
    StoreModule.forRoot({ preventivo: preventivoReducer }),
    EffectsModule.forRoot([PreventivoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production,
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
