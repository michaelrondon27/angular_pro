import { TestBed } from '@angular/core/testing';
import { QueryClient, provideTanStackQuery } from '@tanstack/angular-query-experimental';

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
});
