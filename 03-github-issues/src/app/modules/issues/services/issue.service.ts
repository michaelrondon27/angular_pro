import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { QueryClient, injectQuery } from '@tanstack/angular-query-experimental';

// Actions
import { getIssueByNumber, getIssueCommentsByNumber } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

    private _queryClient: QueryClient = inject(QueryClient);

    private _issueNumber: WritableSignal<string | null> = signal<string | null>(null);

    public issueCommentsQuery = injectQuery(() => ({
        enabled: this._issueNumber() !== null,
        queryKey: ['issue', this._issueNumber(), 'comments'],
        queryFn: () => getIssueCommentsByNumber(this._issueNumber()!)
    }));

    public issueQuery = injectQuery(() => ({
        enabled: this._issueNumber() !== null,
        queryKey: ['issue', this._issueNumber()],
        queryFn: () => getIssueByNumber(this._issueNumber()!)
    }));

    setIssueNumber(issueNumber: string): void {
        this._issueNumber.set(issueNumber);
    }

    prefetchIssue(issueNumber: string): void {
        this._queryClient.prefetchQuery({
            queryKey: ['issue', issueNumber],
            queryFn: () => getIssueByNumber(issueNumber),
            staleTime: 1000 * 60 * 5
        });
    }

}
