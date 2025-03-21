// Environments
import { environment } from "src/environments/environment.development";

// Helpers
import { sleep } from "@helpers/sleep";

// Interfaces
import { GithubLabel } from "../interfaces";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;

export const getIssues = async (): Promise<GithubLabel[]> => {
    await sleep(1500);

    try {
        const resp = await fetch(`${ BASE_URL }/issues`, {
            headers: {
                Authorization: `Bearer ${ GITHUB_TOKEN }`
            }
        });

        if (!resp.ok) throw "Can't load issues";

        const issues: GithubLabel[] = await resp.json();
        console.log({issues})

        return issues;
    } catch (error) {
        throw "Can't load issues";
    }
};
