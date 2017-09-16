import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private translate: TranslateService,
    private localize: LocalizeRouterService) {

  }

  ngOnInit() {
  }

  changeLanguage(languageCode) {
    this.localize.changeLanguage(languageCode);
  }
}
