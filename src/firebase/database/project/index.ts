import IProject from '../../../types/IProject.ts';

export * from './create-project.db.ts';
export * from './fetch-project.db.ts';
export * from './update-project.db.ts';
export * from './delete-project.db.ts';
export * from './subscribe-to-project.db.ts';
export * from './add-user-to-project.db.ts';

export const DatabaseProjectToIProject = (dbSnapshot): IProject => {
    const project: IProject = {
        cloud: true,
        ...dbSnapshot.val(),
    };

    if (project.entryMap === undefined) project.entryMap = {};
    if (project.members === undefined) project.members = [];
    if (project.tables === undefined) project.tables = [];

    return project;
};
