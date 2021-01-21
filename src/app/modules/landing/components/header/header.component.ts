import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public activeLang = 'pt';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit(): void {
  }

  public changeLanguage(lang: string): void {
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
