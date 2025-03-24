import { Injectable, WritableSignal, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';

// Actions
import { getIssueByNumber } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

    private _issueNumber: WritableSignal<string | null> = signal<string | null>(null);

    public issueQuery = injectQuery(() => ({
        enabled: this._issueNumber() !== null,
        queryKey: ['issue', this._issueNumber()],
        queryFn: () => getIssueByNumber(this._issueNumber()!)
    }));

    setIssueNumber(issueNumber: string): void {
        this._issueNumber.set(issueNumber);
    }

}
