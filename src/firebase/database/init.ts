import {getDatabase} from 'firebase/database';
import {FirebaseApp} from '../init.ts';

export const Database = getDatabase(FirebaseApp);
