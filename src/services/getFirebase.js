import firebase from "firebase/app"

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBZYeJRA7Lja9forvggq2y7bQUq89R2jCE",
    authDomain: "hawaiideco.firebaseapp.com",
    projectId: "hawaiideco",
    storageBucket: "hawaiideco.appspot.com",
    messagingSenderId: "552045014095",
    appId: "1:552045014095:web:4cb7f1925d4ee7acc04e3a"
    
};

const app = firebase.initializeApp(firebaseConfig)

// export function getFirebase(){
// return app
// }

export function getFirestore(){
    return firebase.firestore(app)

}


