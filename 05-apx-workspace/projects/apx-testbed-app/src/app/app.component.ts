import { Component, WritableSignal, signal } from '@angular/core';

import { ApxSideMenuComponent, TitleColor } from 'apx-side-menu';

@Component({
    selector: 'app-root',
    imports: [
        ApxSideMenuComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {

    public TitleColor: typeof TitleColor = TitleColor;

    public isAuthenticated: WritableSignal<boolean> = signal<boolean>(true);
    public title          : WritableSignal<string> = signal<string>('apx-testbed-app');

}
