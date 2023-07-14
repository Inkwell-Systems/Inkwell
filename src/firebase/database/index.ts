import {getDatabase} from 'firebase/database';
import {FirebaseApp} from '../index.ts';

export const Database = getDatabase(FirebaseApp);

export * from './user';
export * from './project';
