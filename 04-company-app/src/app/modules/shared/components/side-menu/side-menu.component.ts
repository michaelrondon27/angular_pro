import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, InputSignal, OutputEmitterRef, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-side-menu',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive
    ],
    templateUrl: './side-menu.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {

    isAuthenticated : InputSignal<boolean> = input<boolean>(false);

    onSignIn : OutputEmitterRef<void> = output();
    onSignOut: OutputEmitterRef<void> = output();

}
