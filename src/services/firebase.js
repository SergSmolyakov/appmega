import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB307YU3TY52gsw_7B4TAVS8AzsSonczLk",
    authDomain: "megaproject-37e21.firebaseapp.com",
    databaseURL: "https://megaproject-37e21-default-rtdb.firebaseio.com",
    projectId: "megaproject-37e21",
    storageBucket: "megaproject-37e21.appspot.com",
    messagingSenderId: "897157242149",
    appId: "1:897157242149:web:34e8a980959b37a6648ecc",
    measurementId: "G-0D61NP17RN"
  };
  const firebase = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

  export default firebase; 