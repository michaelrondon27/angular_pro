import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTanStackQuery, QueryClient, withDevtools } from '@tanstack/angular-query-experimental'
import { provideMarkdown } from 'ngx-markdown';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        provideMarkdown(),
        provideRouter(routes),
        provideTanStackQuery(new QueryClient(), withDevtools())
    ]
};
