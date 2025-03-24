import { CommonModule } from '@angular/common';
import { Component, InputSignal, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

// Interfaces
import { GithubIssue, State } from '../../interfaces';

// Services
import { IssueService } from '../../services/issue.service';

@Component({
    selector: 'issue-item',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink
    ],
    templateUrl: './issue-item.component.html'
})
export class IssueItemComponent {

    public issueService: IssueService = inject(IssueService);

    public issue: InputSignal<GithubIssue> = input.required<GithubIssue>();

    get isOpen(): boolean {
        return this.issue().state === State.Open;
    }

    prefetchData(): void {
        this.issueService.prefetchIssue(this.issue().number.toString());
    }

}
