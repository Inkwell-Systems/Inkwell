import IProject from '../../../types/IProject.ts';
import {IResult} from '../../../types/IResult.ts';
import {ref, update} from 'firebase/database';
import {DeleteProject} from '../index.ts';
import {Database} from '../../index.ts';

export const UpdateProject = async (
    project: IProject,
): Promise<IResult<IProject>> => {
    try {
        if (!project.cloud) {
            console.log(
                `Project ${project.projectId} is being removed from the cloud. (UpdateProject)`,
            );
            await DeleteProject(project);
            return {
                data: null,
                error: null,
            };
        }

        await update(ref(Database, `projects/${project.projectId}`), {
            entryMap: project.entryMap,
            scopes: project.scopes,
            projectBanner: project.projectBanner,
            projectName: project.projectName,
            projectDescription: project.projectDescription,
        });

        console.log(
            `Updated project ${project.projectId} in database. (UpdateProject)`,
        );

        return {
            data: project,
            error: null,
        };
    } catch (error) {
        console.log(
            `Failed to update project ${project.projectId} in database. (UpdateProject)`,
        );
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
};
