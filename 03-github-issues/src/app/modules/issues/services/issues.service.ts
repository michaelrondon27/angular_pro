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

    public selectedLabels: WritableSignal<Set<string>> = signal(new Set<string>());
    public selectedState : WritableSignal<State> = signal<State>(State.All);

    public issuesQuery = injectQuery(() => ({
        queryKey: ['issues', {
            selectedLabels: [...this.selectedLabels()],
            state: this.selectedState()
        }],
        queryFn: () => getIssues([...this.selectedLabels()], this.selectedState())
    }));

    public labelsQuery = injectQuery(() => ({
        queryKey: ['labels'],
        queryFn: () => getLabels()
    }));

    showIssuesByState(state: State): void {
        this.selectedState.set(state);
    }

    toggleLabel(label: string): void {
        const labels = this.selectedLabels();

        if (labels.has(label)) {
            labels.delete(label);
        } else {
            labels.add(label);
        }

        this.selectedLabels.set(new Set(labels));
    }

}
