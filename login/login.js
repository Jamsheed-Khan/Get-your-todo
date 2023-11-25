import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { auth } from "../confighome.js";





let loginbtn = document.querySelector('#loginbtn')
let lemail = document.querySelector('#lemail')
  let lpassword = document.querySelector('#lpass')


  loginbtn.addEventListener('click', (event) => {
    // event.preventDefault();
    signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
        .then((userCredential) => {
            const user = userCredential.user;

            console.log(user);
            localStorage.setItem('userid',user.uid)
            console.log(user.uid)
            window.location = '../index.html'
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
});


 
let passicon = document.getElementById("passicon")
window.passshow = function(){

    if(lpass.type == "password"){
        lpass.type = "text"
        passicono.style = "display:visible;"
        passicon.style =   "display:none;"
    }else{
        lpass.type = "password"
        passicono.style = "display:none;"
        passicon.style =   "display:visible;"
    }
}