import firebase from 'firebase'
 
const config = {
    apiKey: "AIzaSyDCOC_WwymaiGMxLNIN5SBNJs5KMrUPxmY",
    authDomain: "react-native-database-develer.firebaseapp.com",
    databaseURL: "https://react-native-database-develer.firebaseio.com",
    projectId: "react-native-database-develer",
    storageBucket: "react-native-database-develer.appspot.com",
    messagingSenderId: "722931507123",
  }
  
  let app =  firebase.initializeApp(config)


  export {app}