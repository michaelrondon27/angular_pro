import { Component, EffectRef, WritableSignal, effect, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

// Services
import { LanguageService } from './services/language.service';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    private _ssrCookieService: SsrCookieService = inject(SsrCookieService);
    private _languageService : LanguageService = inject(LanguageService);

    public title: WritableSignal<string> = signal<string>('i18n-app');

    cookieEffect: EffectRef = effect(() => {
        const lang = this._ssrCookieService.check('lang') ? this._ssrCookieService.get('lang') : 'en';

        this._languageService.changeLang(lang);
    });

}
