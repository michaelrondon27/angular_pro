import { bootstrapApplication } from '@angular/platform-browser';

// Components
import { AppComponent } from './app/app.component';

// Config
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
