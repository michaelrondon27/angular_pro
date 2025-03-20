import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

// Components
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';

// Services
import { IssuesService } from '../../services/issues.service';

@Component({
    selector: 'app-issues-list-page',
    standalone: true,
    imports: [
        CommonModule,
        LabelsSelectorComponent,
        RouterLink
    ],
    templateUrl: './issues-list-page.component.html'
})
export default class IssuesListPageComponent {

    public issuesService: IssuesService = inject(IssuesService);

    get labelsQuery() {
        return this.issuesService.labelsQuery;
    }

}
