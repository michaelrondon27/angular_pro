import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';

// Services
import { SERVER_LANG_TOKEN } from './app/services/language.service';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const commonEngine = new CommonEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.get(
    '**',
    express.static(browserDistFolder, {
        maxAge: '1y',
        index: 'index.html'
    }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;
    const cookies: string = headers.cookie ?? '';
    const langCookie: string = cookies.split(';').find(cookie => cookie.includes('lang')) ?? 'lang=en';
    const [_ , lang] = langCookie.split('=');

    commonEngine.render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [
            { provide: APP_BASE_HREF, useValue: baseUrl },
            { provide: 'REQUEST', useValue: req },
            { provide: 'RESPONSE', useValue: res },
            { provide: SERVER_LANG_TOKEN, useValue: lang }
        ]
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
    const port = process.env['PORT'] || 4000;

    app.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
    });
}
