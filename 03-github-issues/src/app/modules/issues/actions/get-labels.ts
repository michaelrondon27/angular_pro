// Helpers
import { sleep } from "@helpers/sleep";

// Interfaces
import { GithubLabel } from "../interfaces";

export const GetLabels = async (): Promise<GithubLabel[]> => {
    await sleep(1500);

    try {
        const resp = await fetch(`https://api.github.com/repos/angular/angular/labels`);

        if (!resp.ok) throw "Can't load labels";

        const labels: GithubLabel[] = await resp.json();

        return labels;
    } catch (error) {
        throw "Can't load labels";
    }
};
