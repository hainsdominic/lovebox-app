import React from 'react';

// Firebase
import firebase from 'firebase/app';
import 'firebase/database';
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
} from '@react-firebase/database';
import { firebaseConfig } from './config/firebase';

import { CssBaseline } from '@material-ui/core';

import MessageForm from './components/MessageForm';

function App() {
  return (
    <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
      <CssBaseline />
      <MessageForm />
    </FirebaseDatabaseProvider>
  );
}

export default App;
