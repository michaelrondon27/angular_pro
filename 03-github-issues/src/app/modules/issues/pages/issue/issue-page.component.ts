import { CommonModule } from '@angular/common';
import { Component, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CreateQueryResult } from '@tanstack/angular-query-experimental';
import { map, tap } from 'rxjs';

// Components
import { IssueCommentComponent } from '../../components/issue-comment/issue-comment.component';

// Interfaces
import { GithubIssue } from '../../interfaces';

// Services
import { IssueService } from '../../services/issue.service';

@Component({
    selector: 'app-issue-page',
    standalone: true,
    imports: [
        CommonModule,
        IssueCommentComponent,
        RouterLink
    ],
    templateUrl: './issue-page.component.html'
})
export default class IssuePageComponent {

    private _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
    private _issueService  : IssueService = inject(IssueService);

    public issueNumber: Signal<string | undefined> = toSignal<string>(
        this._activatedRoute.paramMap.pipe(
            map(params => params.get('number') ?? ''),
            tap((number) => this._issueService.setIssueNumber(number))
        )
    );

    public issueQuery        : CreateQueryResult<GithubIssue, Error> = this._issueService.issueQuery;
    public issueCoomentsQuery: CreateQueryResult<GithubIssue[], Error> = this._issueService.issueCommentsQuery;

}
