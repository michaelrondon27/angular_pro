import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

// Components
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';

@Component({
    selector: 'app-basic-plan',
    imports: [
        CommonModule,
        LanguageSelectorComponent,
        RouterLink,
        TranslateModule
    ],
    templateUrl: './basic-plan.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class BasicPlanComponent { }
