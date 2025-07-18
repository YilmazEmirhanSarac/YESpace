// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2gJLNJNZWhIR1c2DKgnj6YPkz814q7ys",
  authDomain: "yespace-47f33.firebaseapp.com",
  projectId: "yespace-47f33",
  storageBucket: "yespace-47f33.firebasestorage.app",
  messagingSenderId: "886600714538",
  appId: "1:886600714538:web:5a095c5941ac015f047653"
};
// Function to register a new user
const registerUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
};
// Function to sign in an existing user
const signInUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
};

// Function to sign out the current user
const signOutUser = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Sign out error:", error);
      throw error;
    }
};

// Function to reset password
const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      console.log("Password reset email sent!");
    } catch (error) {
      console.error("Password reset error:", error);
      throw error;
    }
};
  
// Function to observe user authentication state
const observeUser = (callback) => {
    return onAuthStateChanged(auth, (user) => {
      callback(user);
    });
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth, registerUser, signInUser, signOutUser, resetPassword, observeUser };