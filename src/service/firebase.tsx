import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB7arn3RtpWEWiLbM1lIn3bv54sv5XMGkA",
  authDomain: "doing-mate.firebaseapp.com",
  projectId: "doing-mate",
  storageBucket: "doing-mate.appspot.com",
  messagingSenderId: "873924991730",
  appId: "1:873924991730:web:3eaf74d9db6098a8610e6b",
  measurementId: "G-F3PB6ZJCBD",
};

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(initializeApp(firebaseConfig));

export { googleProvider, githubProvider, auth };
