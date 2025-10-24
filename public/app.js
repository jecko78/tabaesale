  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDb4yXxYX36Czb0j-13SkLmISFgL0n1xHc",
    authDomain: "tabaesale.firebaseapp.com",
    projectId: "tabaesale",
    storageBucket: "tabaesale.firebasestorage.app",
    messagingSenderId: "844409918033",
    appId: "1:844409918033:web:0d8f179f24becc1fc85e70",
    measurementId: "G-W0T34XE7TJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  const form = document.getElementById('registerform');
  const formarea = document.getElementById('formarea');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            alert("User Registered Successfully");

        }).catch((error) => {
            alert(error.message);
        });
            // Signed in
        // console.log(form.email.value);
        // console.log(form.password.value);
    });
