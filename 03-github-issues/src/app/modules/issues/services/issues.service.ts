import { Injectable } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';

// Actions
import { GetLabels } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

    public labelsQuery = injectQuery(() => ({
        queryKey: ['labels'],
        queryFn: () => GetLabels()
    }))

}
