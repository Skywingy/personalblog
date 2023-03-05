// Import the functions you need from the SDKs you need
const { initializeApp } = require ("firebase/app");
const { getStorage } =  require("firebase/storage");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9y-wJb5XNjnZN7SnemklZSoUqjHUoTXs",
  authDomain: "personalblog-2068c.firebaseapp.com",
  projectId: "personalblog-2068c",
  storageBucket: "personalblog-2068c.appspot.com",
  messagingSenderId: "337794755379",
  appId: "1:337794755379:web:3874aecdf58f3285146c46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firebase storage reference
const storage2 = getStorage(app);

module.exports = { storage2 };
