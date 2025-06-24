import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

// Components
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';

@Component({
    selector: 'app-products',
    imports: [
        CommonModule,
        LanguageSelectorComponent,
        RouterLink,
        TranslateModule
    ],
    templateUrl: './products.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProductsComponent {

    public fullName: WritableSignal<string> = signal<string>('Michael Rondon');

}
