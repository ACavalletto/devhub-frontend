import firebase from 'firebase/app';
import 'firebase/auth';
import { useHistory } from 'react-router-dom'

const config = {
    apiKey: "AIzaSyCSpXChOXRu3ajCx_iapuQZthGruyiB3CA",
    authDomain: "devhub-d77eb.firebaseapp.com",
    projectId: "devhub-d77eb",
    storageBucket: "devhub-d77eb.appspot.com",
    messagingSenderId: "473960897892",
    appId: "1:473960897892:web:511f00c8add59190d06e71",
    measurementId: "G-DX44CGZ1DL"
  };

  firebase.initializeApp(config);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
 
  function login() {


    
    return auth.signInWithPopup(provider)
    
    }
    
  


  function logout() {
    return auth.signOut();
  }

  export { auth, login, logout};