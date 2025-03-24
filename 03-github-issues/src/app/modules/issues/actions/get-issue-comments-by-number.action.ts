// Environments
import { environment } from "src/environments/environment";

// Helpers
import { sleep } from "@helpers/sleep";

// Interfaces
import { GithubIssue } from "../interfaces";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;

export const getIssueCommentsByNumber = async (issueNumber: string): Promise<GithubIssue[]> => {
    await sleep(1500);

    try {
        const resp = await fetch(`${ BASE_URL }/issues/${ issueNumber }/comments`, {
            headers: {
                Authorization: `Bearer ${ GITHUB_TOKEN }`
            }
        });

        if (!resp.ok) throw "Can't load issues";

        const issues: GithubIssue[] = await resp.json();

        return issues;
    } catch (error) {
        throw "Can't load issues";
    }
};
