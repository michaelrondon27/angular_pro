import { Injectable, InjectionToken, WritableSignal, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

export const SERVER_LANG_TOKEN: InjectionToken<string> = new InjectionToken<string>('SERVER_LANG_TOKEN');

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    private _ssrCookieService: SsrCookieService = inject(SsrCookieService);
    private _translateService: TranslateService = inject(TranslateService);

    public currentLang: WritableSignal<string> = signal<string>('');

    changeLang(lang: string) {
        this._ssrCookieService.set('lang', lang);
        this._translateService.setDefaultLang(lang);
        this._translateService.use(lang);

        this.currentLang.set(lang);
    }

}
