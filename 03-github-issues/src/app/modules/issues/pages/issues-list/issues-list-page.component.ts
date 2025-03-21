import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

// Components
import { IssueItemComponent } from '../../components/issue-item/issue-item.component';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';

// Services
import { IssuesService } from '../../services/issues.service';

@Component({
    selector: 'app-issues-list-page',
    standalone: true,
    imports: [
        CommonModule,
        IssueItemComponent,
        LabelsSelectorComponent
    ],
    templateUrl: './issues-list-page.component.html'
})
export default class IssuesListPageComponent {

    public issuesService: IssuesService = inject(IssuesService);

    get issuesQuery() {
        return this.issuesService.issuesQuery;
    }

    get labelsQuery() {
        return this.issuesService.labelsQuery;
    }

}
