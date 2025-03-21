// Interfaces
import { GithubLabel } from ".";

export enum AuthorAssociation {
    Collaborator = 'COLLABORATOR',
    Contributor  = 'CONTRIBUTOR',
    Member       = 'MEMBER',
    None         = 'NONE'
}

export enum NodeId {
    MDk6TWlsZXN0B25LMzA0NTk2Nw = 'MDk6TWlsZXN0B25LMzA0NTk2Nw=',
    MDk6TWlsZXN0B25LMzE0Mzg4MA = 'MDk6TWlsZXN0B25LMzE0Mzg4MA=',
}

export enum State {
    All    = 'all',
    Closed = 'closed',
    Open   = 'open'
}

export enum Title {
    Backlog     = 'Backlog',
    NeedsTriage = 'needsTriage'
}

export enum Type {
    User = 'User'
}

export interface GithubIssue {
    active_lock_reason?      : string;
    assignee?                : User;
    assignees                : User[];
    author_association       : AuthorAssociation;
    body?                    : string;
    closed_at?               : Date;
    comments                 : number;
    comments_url             : string;
    created_at               : Date;
    draft?                   : boolean;
    events_url               : string;
    html_url                 : string;
    id                       : number;
    labels                   : GithubLabel[];
    labels_url               : string;
    locked                   : boolean;
    milestone                : Milestone;
    node_id                  : string;
    number                   : number;
    performed_via_github_app?: string;
    pull_request?            : PullRequest;
    reactions                : Reactions;
    repository_url           : string;
    state                    : State;
    state_reason?            : string;
    timeline_url             : string;
    update_at                : Date;
    user                     : User;
    url                      : string;
}

export interface Milestone {
    closed_issues: number;
    closed_at?   : Date;
    created_at   : Date;
    creator      : string;
    description  : string;
    due_on?      : Date;
    html_url     : string;
    labels_url   : string;
    id           : number;
    node_id      : number;
    number       : number;
    open_issues  : number;
    state        : State;
    title        : Title;
    updated_at   : Date;
    url          : string;
}

export interface PullRequest {
    diff_url : string;
    html_url : string;
    merged_at: Date;
    patch_url: string;
    url      : string;
}

export interface Reactions {
    confused   : number;
    eyes       : number;
    heart      : number;
    hooray     : number;
    laugh      : number;
    rocket     : number;
    total_count: number;
    url        : string;
    '+1'       : number;
    '-1'       : number;
}

export interface User {
    avatar_url         : string;
    events_url         : string;
    followers_url      : string;
    following_url      : string;
    gists_url          : string;
    gravatar_id        : string;
    html_url           : string;
    id                 : number;
    login              : string;
    node_id            : string;
    organizations_url  : string;
    received_events_url: string;
    repos_url          : string;
    site_admin         : boolean;
    starred_url        : string;
    subscriptions_url  : string;
    type               : Type;
    url                : string;
}
