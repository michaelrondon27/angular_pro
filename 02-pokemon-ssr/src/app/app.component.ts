import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
    selector: 'app-root',
    imports: [
        NavbarComponent,
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    title = 'pokemon-ssr';

}
