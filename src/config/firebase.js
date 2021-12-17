// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBks7EP8zLCTL0hEN5E8miUUrAsWrmsDbo",
  authDomain: "hackthonjp.firebaseapp.com",
  projectId: "hackthonjp",
  storageBucket: "hackthonjp.appspot.com",
  messagingSenderId: "1042524370785",
  appId: "1:1042524370785:web:3af2b6a2204f8381553720",
  measurementId: "G-6FDXYKFHLN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

let userLogin = (obj) => {
  console.log(obj);
};

let signUp = (obj, navigate) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        let uid = user.uid;
        dispatch({
          type: "SIGNUPDATA",
          uid,
        });
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
};

export { userLogin, signUp };
