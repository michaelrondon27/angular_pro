// Environments
import { environment } from "src/environments/environment";

// Helpers
import { sleep } from "@helpers/sleep";

// Interfaces
import { GithubIssue, State } from "../interfaces";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;

export const getIssues = async (seletedLabels: string[], state: State = State.All): Promise<GithubIssue[]> => {
    const params: URLSearchParams = new URLSearchParams();
    params.append('state', state);

    if (seletedLabels.length) {
        params.append('labels', seletedLabels.join(','));
    }

    try {
        const resp = await fetch(`${ BASE_URL }/issues?${ params }`, {
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
