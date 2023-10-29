import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BoxComponent } from '../components/shared/box/box.component';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from '../configs/shared.config';
import { RouterModule } from '@angular/router';
import { ScrolljackingDirective } from '../directives/scroll-jacking.directive';

@NgModule({
  declarations: [
    BoxComponent,
    NavbarComponent,
    ScrolljackingDirective
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
    //ngx-translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    BoxComponent,
    NavbarComponent,
    ScrolljackingDirective
  ]
})
export class SharedModule {

  constructor(private readonly translateService: TranslateService) {
    //default language
    translateService.setDefaultLang('it');
    translateService.use('it');
  }
}
