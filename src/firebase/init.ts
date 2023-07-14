import {initializeApp} from 'firebase/app';

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

// Initialize Firebase

console.log('Initialized firebase!');
export const FirebaseApp = initializeApp(FirebaseConfig);
