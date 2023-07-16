import IProject from '../types/IProject.ts';
import {IResult} from '../types/IResult.ts';
import {Convert} from './woah.ts';

export const LoadProject = (jsonContent: string): IResult<IProject> => {
    try {
        const errProj: any = Convert.toIErrorProject(jsonContent);

        return {
            data: errProj,
            error: null,
        };
    } catch (error) {
        console.log(`Error loading project from json!`);
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
};
