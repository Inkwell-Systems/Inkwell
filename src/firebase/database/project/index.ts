import IProject from '../../../types/IProject.ts';

export * from './create-project.db.ts';
export * from './fetch-project.db.ts';
export * from './update-project.db.ts';
export * from './delete-project.db.ts';
export * from './subscribe-to-project.db.ts';
export * from './add-user-to-project.db.ts';
export * from './remove-user-from-project.db.ts';

export const DatabaseProjectToIProject = (dbSnapshot): IProject => {
    const project: IProject = {
        cloud: true,
        ...dbSnapshot.val(),
    };

    if (project.entryMap === undefined) project.entryMap = {};
    if (project.members === undefined) project.members = [];
    if (project.tables === undefined) project.tables = {};
    if (project.scopes === undefined) project.scopes = {};

    for (const table of Object.values(project.tables)) {
        if (table === undefined) continue;

        if (table.facts === undefined) table.facts = {};
        if (table.events === undefined) table.events = {};
        if (table.rules === undefined) table.rules = {};

        for (const event of Object.values(table.events)) {
            if (event === undefined) continue;

            if (event.triggers === undefined) event.triggers = [];
        }

        for (const rule of Object.values(table.rules)) {
            if (rule === undefined) continue;

            if (rule.ruleCriteria === undefined) rule.ruleCriteria = [];
            if (rule.ruleModifications === undefined)
                rule.ruleModifications = [];
        }
    }

    return project;
};
