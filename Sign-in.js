import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyA1eIsNv6jgME94d8ptQT45JxCk2HswuyY",
    authDomain: "project-109e2.firebaseapp.com",
    databaseURL: "https://project-109e2.firebaseio.com",
    projectId: "project-109e2",
    storageBucket: "project-109e2.appspot.com",
    messagingSenderId: "994321863318",
    appId: "1:994321863318:web:b766880a4000eede9ba8b7",
    measurementId: "G-E3HTP8QP7H"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import{getDatabase, ref, set, get, child, update, remove}
  from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";
const db= getDatabase();
var  username, email, password;
const dataForm = document.getElementById('data');
dataForm.addEventListener("submit", submit, false); 

function submit(e){
    e.preventDefault();
     Ready()
      sign_in()
  }
  
  
  function Ready(){
      email= document.getElementById("email").value;
      password= document.getElementById("password").value;
  }
  function sign_in(evt){
    if(email!==""&&password!==""){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            
            const user = userCredential.user;
            if (document.referrer != "") {
                history.back();
            }else{
                window.location="index.html"
            }
          })
          .catch((error) => {
            alert(error)
          });
    }
  }

