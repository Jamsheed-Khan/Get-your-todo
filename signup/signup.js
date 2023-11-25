import { createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "../confighome.js";
import { db } from "../confighome.js";
import {
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  collection
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// import { db } from "../config.js";
let semail = document.getElementById("email")
let spass = document.getElementById("pass")
let sname = document.getElementById("sname")
let cpass = document.getElementById("cpass")


let signupbtn = document.querySelector("#btn")
signupbtn.addEventListener('click', function () {

  createUserWithEmailAndPassword(auth,semail.value,spass.value,sname.value,cpass.value)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log('user==>', user);
      window.location = "../login/login.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error==>", errorMessage);
    });
});
let id = Math.random()*10 
console.log(id)
signupbtn.addEventListener('click',async ()=>{

  try {
    const docRef = await addDoc(collection(db, "users"), {
      email:semail.value,
      password:spass.value,
      Name:sname.value,
      confirmpassword:cpass.value
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }


  
})


 
let passicon = document.getElementById("passicon")
window.passshow = function(){

    if(spass.type == "password"){
        spass.type = "text"
        passicono.style = "display:visible;"
        passicon.style =   "display:none;"
    }else{
        spass.type = "password"
        passicono.style = "display:none;"
        passicon.style =   "display:visible;"
    }
}

let icon4 = document.querySelector('#icon4')
let icon5 = document.querySelector('#icon5')
window.passshow1 = function(){

  if(cpass.type == "password"){
      cpass.type = "text"
      icon4.style = "display:visible;"
      icon5.style =   "display:none;"
  }else{
      cpass.type = "password"
      icon5.style = "display:none;"
      icon4.style =   "display:visible;"
  }
}