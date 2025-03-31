// Actions
import { getIssueByNumber } from ".";

// Environments
import { environment } from "src/environments/environment";

// Interfaces
import { GithubIssue } from "../interfaces";

const BASE_URL    : string = environment.baseUrl;
const issueNumber : string = '123';
const GITHUB_TOKEN: string = environment.githubToken;

const mockIssue = {
    body: '# Hola Mundo',
    id: 123,
    number: issueNumber
};

describe('GetIssueByNumber action', () => {
    it('should fetch issue successfully', async () => {
        const requestURL: string = `${ BASE_URL }/issues/${ issueNumber }`;
        const issueResponse: Response = new Response(JSON.stringify(mockIssue), {
            status: 200,
            statusText: 'OK'
        });

        spyOn(window, 'fetch').and.resolveTo(issueResponse);

        const issue: GithubIssue = await getIssueByNumber(issueNumber);

        expect(window.fetch).toHaveBeenCalledWith(requestURL, {
            headers: {
                Authorization: `Bearer ${ GITHUB_TOKEN }`
            }
        })
    });
});
