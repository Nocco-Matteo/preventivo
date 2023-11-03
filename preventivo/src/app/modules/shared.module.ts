import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { BoxComponent } from '../components/shared/box/box.component';
import { NavbarComponent } from '../components/shared/navbar/navbar.component';
import { HttpLoaderFactory } from '../configs/shared.config';
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
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
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
    ScrolljackingDirective,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class SharedModule {

  constructor(private readonly translateService: TranslateService) {
    //default language
    translateService.setDefaultLang('it');
    translateService.use('it');
  }
}
