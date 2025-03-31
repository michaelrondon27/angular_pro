// Actions
import { getIssueCommentsByNumber } from ".";

// Environments
import { environment } from "src/environments/environment";

// Interfaces
import { GithubIssue } from "../interfaces";

const BASE_URL    : string = environment.baseUrl;
const issueNumber : string = '123';
const GITHUB_TOKEN: string = environment.githubToken;

const mockComments: any[] = [
    { body: 'First comment', id: 1, user: { login: 'user1' } },
    { body: 'Second comment', id: 2, user: { login: 'user2' } }
];

describe('GetIssueComments', () => {
    it('should fetch issue comments sucessfully', async () => {
        const requestURL: string = `${ BASE_URL }/issues/${ issueNumber }/comments`;
        const issueCommentsResponse: Response = new Response(JSON.stringify(mockComments), {
            status: 200,
            statusText: 'OK'
        });

        spyOn(window, 'fetch').and.resolveTo(issueCommentsResponse);

        const issue: GithubIssue[] = await getIssueCommentsByNumber(issueNumber);

        expect(window.fetch).toHaveBeenCalledWith(requestURL, {
            headers: {
                Authorization: `Bearer ${ GITHUB_TOKEN }`
            }
        });
    });

    it('should throw an error if the response is not ok', async () => {
        const issueCommentsResponse: Response = new Response(null, {
            status: 404,
            statusText: 'Not Found'
        });

        spyOn(window, 'fetch').and.resolveTo(issueCommentsResponse);

        try {
            const issue: GithubIssue[] = await getIssueCommentsByNumber(issueNumber);

            expect(true).toBeFalse();
        } catch (error) {
            expect(error).toBe("Can't load issues");
        }
    });
});
