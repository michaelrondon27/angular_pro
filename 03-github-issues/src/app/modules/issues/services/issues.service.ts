import { Injectable, WritableSignal, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';

// Actions
import { getIssues, getLabels } from '../actions';

// Interfaces
import { State } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

    public selectedState: WritableSignal<State> = signal<State>(State.All);

    public issuesQuery = injectQuery(() => ({
        queryKey: ['issues', this.selectedState()],
        queryFn: () => getIssues(this.selectedState())
    }));

    public labelsQuery = injectQuery(() => ({
        queryKey: ['labels'],
        queryFn: () => getLabels()
    }));

    showIssuesByState(state: State): void {
        this.selectedState.set(state);
    }

}
