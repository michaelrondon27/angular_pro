import { Injectable, inject } from '@angular/core';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    private _ssrCookieService: SsrCookieService = inject(SsrCookieService);

    changeLang(lang: string) {
        this._ssrCookieService.set('lang', lang);
    }

}
