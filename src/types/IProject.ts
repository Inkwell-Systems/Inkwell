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
    scopes: IScopeHierarchy;
    owner: string;
    members: string[];
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
    tables: [],
    owner: '',
    members: [],
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
