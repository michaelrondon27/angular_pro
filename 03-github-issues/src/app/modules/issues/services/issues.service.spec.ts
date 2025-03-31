import { TestBed } from '@angular/core/testing';
import { QueryClient, provideTanStackQuery } from '@tanstack/angular-query-experimental';

// Interfaces
import { State } from '../interfaces';

// Services}
import { IssuesService } from './issues.service';

describe('IssuesService', () => {
    const queryClient: QueryClient = new QueryClient();

    let issuesService: IssuesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideTanStackQuery(new QueryClient())
            ],
            teardown: {
                destroyAfterEach: false
            }
        });

        issuesService = TestBed.inject(IssuesService);
    });

    it('should be created', () => {
        expect(issuesService).toBeTruthy();
    });

    it('should load labels', async () => {
        const { data } = await issuesService.labelsQuery.refetch();

        expect(data?.length).toBe(30);

        const [ label ] = data!;

        expect(typeof label.color).toBe('string');
        expect(typeof label.default).toBe('boolean');
        expect(typeof label.description).toBe('string');
        expect(typeof label.id).toBe('number');
        expect(typeof label.name).toBe('string');
        expect(typeof label.node_id).toBe('string');
        expect(typeof label.url).toBe('string');
    });

    it('should set selected state, OPEN, CLOSED, ALL', async () => {
        issuesService.showIssuesByState(State.Closed);

        expect(issuesService.selectedState()).toBe(State.Closed);

        const { data } = await issuesService.issuesQuery.refetch();

        data?.forEach(issue => {
            expect(issue.state).toBe(State.Closed);
        });

        issuesService.showIssuesByState(State.Open);

        const { data: dataOpen } = await issuesService.issuesQuery.refetch();

        dataOpen?.forEach(issue => {
            expect(issue.state).toBe(State.Open);
        });

    });
});
