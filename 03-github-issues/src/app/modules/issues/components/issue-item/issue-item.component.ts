import { CommonModule } from '@angular/common';
import { Component, InputSignal, input } from '@angular/core';
import { RouterLink } from '@angular/router';

// Interfaces
import { GithubIssue, State } from '../../interfaces';

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

    public issue: InputSignal<GithubIssue> = input.required<GithubIssue>();

    get isOpen(): boolean {
        return this.issue().state === State.Open;
    }

}
