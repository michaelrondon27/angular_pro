import { Injectable } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';

// Actions
import { getIssues, getLabels } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

    public issuesQuery = injectQuery(() => ({
        queryKey: ['issues'],
        queryFn: () => getIssues()
    }));

    public labelsQuery = injectQuery(() => ({
        queryKey: ['labels'],
        queryFn: () => getLabels()
    }));

}
