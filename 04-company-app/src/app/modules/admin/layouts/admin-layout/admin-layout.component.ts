import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { SideMenuComponent } from '../../../shared/components/side-menu/side-menu.component';

@Component({
    selector: 'app-admin-layout',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        SideMenuComponent
    ],
    templateUrl: './admin-layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdminLayoutComponent {

    isAuthenticated: WritableSignal<boolean> = signal<boolean>(false);

    onLogin(): void {
        this.isAuthenticated.set(true);
    }

    onLogout(): void {
        this.isAuthenticated.set(false);
    }

}
