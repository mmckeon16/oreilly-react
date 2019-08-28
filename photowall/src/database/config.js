import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAF3huKB1CE4JEALSuRzR092MuYOy5mOAk",
  authDomain: "photowall-59523.firebaseapp.com",
  databaseURL: "https://photowall-59523.firebaseio.com",
  projectId: "photowall-59523",
  storageBucket: "photowall-59523.appspot.com",
  messagingSenderId: "793857921458",
  appId: "1:793857921458:web:d48f9c487e8698e8"
};

  firebase.initializeApp(config);

  const database = firebase.database();

  export {database};
  
