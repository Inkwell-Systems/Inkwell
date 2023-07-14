import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const FirebaseConfig = {
    apiKey: 'AIzaSyAHJwmfTin3xmfEhlupyDKI4yllk8FsJwM',
    authDomain: 'inkwell-7dff3.firebaseapp.com',
    projectId: 'inkwell-7dff3',
    storageBucket: 'inkwell-7dff3.appspot.com',
    messagingSenderId: '48189402311',
    appId: '1:48189402311:web:912ba068609ce2fe0b22e2',
    databaseURL:
        'https://inkwell-7dff3-default-rtdb.europe-west1.firebasedatabase.app',
};

console.log('Initialized firebase!');
export const FirebaseApp = initializeApp(FirebaseConfig);
export const Database = getDatabase(FirebaseApp);
export const Auth = getAuth(FirebaseApp);

export * from './database';
export * from './auth';
