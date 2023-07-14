import {DataSnapshot, onValue, ref} from 'firebase/database';
import {Database} from '../../index.ts';

export const SubscribeToProject = (
    projectId: string,
    callback: (snapshot: DataSnapshot) => void,
) => {
    const projectRef = ref(Database, `projects/${projectId}`);

    return onValue(projectRef, callback);
};
