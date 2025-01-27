import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

// Routes
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(withEventReplay()),
        provideHttpClient(withFetch()),
        provideRouter(routes),
        provideZoneChangeDetection({ eventCoalescing: true })
    ]
};
