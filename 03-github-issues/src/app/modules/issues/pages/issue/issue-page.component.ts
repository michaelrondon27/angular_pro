import { CommonModule } from '@angular/common';
import { Component, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';

// Services
import { IssueService } from '../../services/issue.service';

@Component({
    selector: 'app-issue-page',
    standalone: true,
    imports: [
        CommonModule
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

}
