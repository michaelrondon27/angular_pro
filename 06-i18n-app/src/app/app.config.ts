import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

// Routes
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(withEventReplay()),
        provideRouter(routes),
        provideZoneChangeDetection({ eventCoalescing: true }),
        SsrCookieService
    ]
};
