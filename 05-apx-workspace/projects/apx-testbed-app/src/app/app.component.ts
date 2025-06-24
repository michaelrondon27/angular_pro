import { Component } from '@angular/core';

import { ApxSideMenuComponent } from 'apx-side-menu';

@Component({
    selector: 'app-root',
    imports: [
        ApxSideMenuComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    title = 'apx-testbed-app';

}
