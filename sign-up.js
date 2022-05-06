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
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";
const db= getDatabase();
var first, last,code,  username, email, password,phone, Aviavlabily, fname;
const dataForm = document.getElementById('data');
dataForm.addEventListener("submit", submit, false); 


function submit(e){
  e.preventDefault();
   Ready()
   if(first!==""&&last!==""&&email!==""&&password!==""&&phone!==""&&username!==""){
       Aviavlabily=1
      Verify_userName()
    if( Aviavlabily===1){
        sign_up()
    }else{
        fname.setCustomValidity("Username already exists.");
    fname.reportValidity();
    }
}else{
      alert("Fill all Fields")
    }
}


function Verify_userName(){
        const dbref=ref(db);
          get(child(dbref,"users/")).then((snapshot)=>{
            if(snapshot.exists()){
                var arr = snapshot.val()
                var numb=  snapshot.val()
              var lenth=Object.keys(numb).length
             if(lenth>0){ 
                var x= lenth-1
                var key= Object.keys(arr)[x]
                var value=arr[key]
          for(let i=x-1; i>=0;i--){
            var key= Object.keys(arr)[i]
            var value=arr[key]
            var codesearch= value["user"]
            if(username===codesearch){
              Aviavlabily=0
            }
         }
            }
        }
          })
          .catch((error)=>Verify_userName())
      
}

function sign_up(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        InsertData(user)
      })
      .catch((error) => {
        alert(error)
      });
  }

  function Ready(){
    first= document.getElementById("first").value;
    last= document.getElementById("last").value;
   email= document.getElementById("email").value;
   password= document.getElementById("password").value;
   username= document.getElementById("username").value;
   phone= document.getElementById("phone").value;
   fname=document.getElementById("username")
}

function InsertData(user){
    set(ref(db, 'users/'+username),{
      first: first,
      second: last,
      email:email,
      user:username,
      phone:phone,
    })
    .then(()=>{
        if (document.referrer != "") {
            evt.preventDefault();
            history.back();
        }else{
            window.location="index.html"
        }
    })
    .catch((error)=>{
    console.log(error)
    }) 
  }