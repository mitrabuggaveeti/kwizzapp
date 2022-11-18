import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyDItLeQ2C3g7pqwA6yz6ngox1qTMJBuMPY",
    authDomain: "quizapplication-14a1b.firebaseapp.com",
    projectId: "quizapplication-14a1b",
    storageBucket: "quizapplication-14a1b.appspot.com",
    messagingSenderId: "863915043649",
    appId: "1:863915043649:web:f427516d731b10a8650fc0"
};
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth()

export default firebase;