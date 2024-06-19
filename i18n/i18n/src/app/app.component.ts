import { Component } from '@angular/core';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'i18n';
  constructor(private translationService: TranslationService) {}

  switchLanguage(lang: string) {
    this.translationService.switchLanguage(lang);
  }
}
