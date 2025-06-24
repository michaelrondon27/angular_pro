import { Component, InputSignal, OutputEmitterRef, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
    blue   = 'text-blue-500',
    green  = 'text-green-500',
    purple = 'text-purple-500',
    red    = 'text-red-500',
}

@Component({
    selector: 'lib-apx-side-menu',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: 'apx-side-menu.component.html',
    styles: ``
})
export class ApxSideMenuComponent {

    isAuthenticated: InputSignal<boolean> = input<boolean>(false);
    titleColor     : InputSignal<TitleColor> = input<TitleColor>(TitleColor.purple);

    onSignIn : OutputEmitterRef<void> = output();
    onSignOut: OutputEmitterRef<void> = output();

}
