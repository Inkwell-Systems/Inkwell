import ITable, {CheckTableValidity} from './ITable.ts';

export default interface IProject {
    projectName: string;
    projectDescription: string;
    projectCreatedAt: number;
    tables: ITable[];
}

export const LoadProjectFromJson = (json: string): IProject => {
    const project = JSON.parse(json);

    if (!CheckProjectValidity(project)) throw new Error('Invalid project!');

    return project;
};

export const CheckProjectValidity = (project: IProject): boolean => {
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
        isNameValid &&
        isDescriptionValid &&
        isCreatedAtNanoValid &&
        isTablesValid
    );
};
