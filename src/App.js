import React, { useState } from 'react';
import './App.css';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { signOut } from 'firebase/auth';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [user] = useAuthState(auth);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);

  return (
    <div className="App">
      <header className="App-header">
        {console.log(user)}
        {user ? (
          <>
            {/* <img src={user?.photoURL} alt="" /> */}
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
          </>
        ) : (
          ''
        )}
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            value={email}
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={password}
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <br />
        <div style={{ display: 'flex' }}>
          <button
            onClick={() => {
              createUserWithEmailAndPassword(email, password);
              setEmail('');
              setPassword('');
            }}
          >
            Register
          </button>
          <button onClick={() => signInWithGoogle()}>Google</button>
          <button onClick={() => signInWithGithub()}>Github</button>
          <button onClick={() => signInWithFacebook()}>Facebook</button>
          <button onClick={() => signOut(auth)}>Sign Out</button>
        </div>
      </header>
    </div>
  );
}

export default App;
