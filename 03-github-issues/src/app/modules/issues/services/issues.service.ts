import { Injectable } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';

// Actions
import { getLabels } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

    public labelsQuery = injectQuery(() => ({
        queryKey: ['labels'],
        queryFn: () => getLabels()
    }))

}
