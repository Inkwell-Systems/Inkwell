import ITable, {CheckTableValidity} from './ITable.ts';
import {DefaultScopeHierarchy, IScopeHierarchy} from './IScope.ts';

export default interface IProject {
    cloud: boolean;
    projectBanner: string;
    projectId: string;
    projectName: string;
    projectDescription: string;
    projectCreatedAt: number;
    tables: ITable[];
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

export const LoadProjectFromJson = (json: string): IProject => {
    const project = JSON.parse(json);

    if (!CheckProjectValidity(project)) throw new Error('Invalid project!');

    return project;
};

export const CheckProjectValidity = (project: IProject): boolean => {
    const isIdValid =
        'projectId' in project && typeof project.projectId === 'string';

    const isNameValid =
        'projectName' in project && typeof project.projectName === 'string';
    const isDescriptionValid =
        'projectDescription' in project &&
        typeof project.projectDescription === 'string';
    const isCreatedAtNanoValid =
        'projectCreatedAt' in project &&
        typeof project.projectCreatedAt === 'number';

    const isTablesValid =
        'tables' in project &&
        Array.isArray(project.tables) &&
        project.tables.every(table => CheckTableValidity(table));

    return (
        isIdValid &&
        isNameValid &&
        isDescriptionValid &&
        isCreatedAtNanoValid &&
        isTablesValid
    );
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
    return project.tables.length;
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
    return `inkwell.systems/invite/${GetProjectInviteCode(project)}}`;
};

export const GenerateProjectId = () => {
    function dec2hex(dec) {
        return dec.toString(16).padStart(2, '0');
    }

    const arr = new Uint8Array(40 / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join('');
};
