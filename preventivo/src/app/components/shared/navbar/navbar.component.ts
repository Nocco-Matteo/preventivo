import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { languages, vociMenu } from 'src/app/configs/navbar.config';
import { Language, Voce } from 'src/app/models/navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  readonly voci: Voce[] = vociMenu
  readonly languages: Language[] = languages
  currentLanguage: Language = languages[0] //it

  constructor(private readonly translate: TranslateService) { }

  ngOnInit(): void {
    this.init()
  }

  switchLanguage(language: Language) {
    this.currentLanguage = language
    this.translate.use(language.language);
  }

  private init(): void {

  }
}
