import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-admin-layout',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet
    ],
    templateUrl: './admin-layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdminLayoutComponent { }
