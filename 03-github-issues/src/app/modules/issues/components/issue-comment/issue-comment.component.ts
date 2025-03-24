import { CommonModule } from '@angular/common';
import { Component, InputSignal, input } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

// Interfaces
import { GithubIssue } from '../../interfaces';

@Component({
    selector: 'issue-comment',
    standalone: true,
    imports: [
        CommonModule,
        MarkdownModule
    ],
    templateUrl: './issue-comment.component.html'
})
export class IssueCommentComponent {

    public issue: InputSignal<GithubIssue> = input.required<GithubIssue>();

}
