import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Components
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';

@Component({
    selector: 'app-products',
    imports: [
        CommonModule,
        LanguageSelectorComponent,
        RouterLink
    ],
    templateUrl: './products.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProductsComponent { }
