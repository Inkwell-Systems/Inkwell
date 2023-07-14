import ITable, {CheckTableValidity} from './ITable.ts';

export default interface IProject {
    cloud: boolean;
    projectId: string;
    projectName: string;
    projectDescription: string;
    projectCreatedAt: number;
    tables: ITable[];
    owner: string;
    members: string[];
}

export const CreateLocalProject = (name, description): IProject => ({
    cloud: false,
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
