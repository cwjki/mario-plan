import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCfS9v_QvgOshVHlJ4Xhpxc-nx3uYAi2PE",
  authDomain: "mario-plan-707d0.firebaseapp.com",
  databaseURL: "https://mario-plan-707d0.firebaseio.com",
  projectId: "mario-plan-707d0",
  storageBucket: "mario-plan-707d0.appspot.com",
  messagingSenderId: "613702310982",
  appId: "1:613702310982:web:34cd6ad570bd178675fe47",
  measurementId: "G-ZE3H6JN5PV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;