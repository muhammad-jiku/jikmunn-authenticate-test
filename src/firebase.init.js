// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAa0MWnTcHvGHlg-pboVL9Gz3ggAdLSuv4',
  authDomain: 'jikmunn-test.firebaseapp.com',
  projectId: 'jikmunn-test',
  storageBucket: 'jikmunn-test.appspot.com',
  messagingSenderId: '156762518471',
  appId: '1:156762518471:web:fc00f706f0e7b842559fe2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
