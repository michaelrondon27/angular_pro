import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// Routes
import { routes } from './app.routes';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

export const appConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })),
        provideClientHydration(withEventReplay()),
        provideHttpClient(withFetch()),
        provideRouter(routes),
        provideZoneChangeDetection({ eventCoalescing: true }),
        SsrCookieService
    ]
};
