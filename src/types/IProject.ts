import ITable from './ITable.ts';
import {DefaultScopeHierarchy, IScope, IScopeHierarchy} from './IScope.ts';

export default interface IProject {
    cloud: boolean;
    projectBanner: string;
    projectId: string;
    projectName: string;
    projectDescription: string;
    projectCreatedAt: number;
    tables: {[key: number]: ITable};
    entryMap: {[key: number]: string};
    scopes: IScopeHierarchy;
    owner: string;
    members: string[];
    inviteCode: string;
}

export const CreateLocalProject = (name, description): IProject => ({
    cloud: false,
    scopes: DefaultScopeHierarchy,
    projectBanner:
        'https://images.unsplash.com/photo-1482514194978-3ed8cc9d86c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    projectId: '',
    projectName: name,
    projectDescription: description,
    projectCreatedAt: Date.now(),
    entryMap: {},
    tables: [],
    owner: '',
    members: [],
    inviteCode: '',
});

export const GetIEntryFromId = (project: IProject, entryId: number) => {
    const {tables} = project;

    for (const table of Object.values(tables)) {
        const {events, facts, rules} = table;

        if (entryId in events) return events[entryId];
        if (entryId in facts) return facts[entryId];
        if (entryId in rules) return rules[entryId];
    }

    return null;
};

export const GetMinimumEntryIdFromProject = (project: IProject): number => {
    return GetMinimumEntryIdFromMap(project.entryMap);
};

export const GetMinimumEntryIdFromMap = (map: {
    [key: number]: string;
}): number => {
    const entries = Object.keys(map).map(Number);

    if (entries.length === 0) return 0;

    return Math.max(...entries) + 1;
};

export const GetMinimumScopeId = (map: {[key: number]: IScope}): number => {
    const entries = Object.keys(map).map(Number);

    if (entries.length === 0) return 0;

    return Math.max(...entries) + 1;
};

export const GetFormattedProjectDate = (date: Date) => {
    const daysAgo = Math.floor(
        (new Date().getTime() - date.getTime()) / (1000 * 3600 * 24),
    );

    if (daysAgo < 7) return `${daysAgo} days ago`;
    if (daysAgo >= 365) return `${Math.floor(daysAgo / 365)} year(s) ago`;
    if (daysAgo >= 30) return `${Math.floor(daysAgo / 30)} month(s) ago`;
    if (daysAgo >= 7) return `${Math.floor(daysAgo / 4)} week(s) ago`;

    return `How did we get here?!`;
};

export const GetProjectTableCount = (project: IProject) => {
    return Object.values(project.tables).length;
};

export const GetProjectEntryCount = (project: IProject) => {
    return Object.keys(project.entryMap).length;
};

export const GetProjectScopeCount = (project: IProject) => {
    return Object.keys(project.scopes).length;
};

export const GetProjectScopeLevel = (project: IProject) => {
    const values = Object.values(project.scopes);
    return values.length > 0 ? Math.max(...values.map(val => val.level)) : 0;
};

export const GetProjectMemberCount = (project: IProject) => {
    return project.members.length;
};

export const GetProjectInviteCode = (project: IProject) => {
    return `${project.projectId}/${project.inviteCode}`;
};

export const GetProjectInvitationLink = (project: IProject) => {
    return `inkwell.systems/invite/${GetProjectInviteCode(project)}`;
};

export const GenerateProjectId = () => {
    function dec2hex(dec) {
        return dec.toString(16).padStart(2, '0');
    }

    const arr = new Uint8Array(40 / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join('');
};
