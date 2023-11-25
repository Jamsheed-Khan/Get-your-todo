
let popap = document.querySelector('#popap')
let addbtn = document.querySelector('#adddbtn')

let addtask = document.querySelector('#addtask')

window.openpopap = function () {
  popap.classList.add('open-popap')
}


window.closspopap = function () {
  popap.classList.remove('open-popap')
}

import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { db } from "./config.js";
import { auth } from "./confighome.js";
import { collection, addDoc, getDocs,updateDoc, doc, onSnapshot, deleteDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";





if (!localStorage.getItem('userid')) {
  window.location = "../login/login.html"
}
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    localStorage.removeItem('userid')
    window.location = "../login/login.html"
  }

})





let userUid = localStorage.getItem('userid')
let ids = []
// console.log('users uid',userUid);
const gettodo = () => {

  onSnapshot(collection(db, userUid), (data) => {
    data.docChanges().forEach((change) => {
      console.log(change.type);
      console.log((userUid));
      ids.push(change.doc.id)
      console.log(ids)

      if (change.type === "added") {

        console.log(change.doc.data())
        getul.innerHTML +=
          `<div id="${change.doc.id}" class="libd"><li >${change.doc.data().lists} 
          </li>
           <div class="icon"><ion-icon onclick="Deltodoli('${change.doc.id}')" name="trash"></ion-icon>
           <ion-icon name="create"  onclick="editLi(this,'${change.doc.id}')"></ion-icon></div></div>`

      }
      else if (change.type === "removed") {
        let addd = document.getElementById(change.doc.id)
        if (addd) {

          addd.remove()
        }
      }
      else{






      }
    })

  });

}

gettodo()









addtask.addEventListener('click', async () => {
  let getinp = document.querySelector('#getinp')
  if (getinp.value === "") {
    alert('please Enter some thing')
  }
  else {
    try {
      const docRef = await addDoc(collection(db, userUid), {
        lists: getinp.value,
      });
      getinp.value = ""
      console.log("Document written with ID: ", docRef.id);
      ids.push(todos.doc.id)

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
})




window.Deltodoli = async function (id) {
  await deleteDoc(doc(db, userUid, id));
  console.log("deleted")
  
}
window.editLi = async function (e,id) {
  let upli = prompt('update your li ')
  
  if(upli === ""){
    alert("enter some thing")

  }else{
  
  e.parentNode.parentNode.firstChild.firstChild.nodeValue = upli
    await updateDoc(doc(db,userUid,id), {
      lists:upli,
      Date: new Date().toLocaleString()
    
    })
  
  }
  }




onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    // ...
  } else {
    // User is signed out
    window.location = "../login/login.html"
    // ...
  }
});





let btn = document.querySelector("#logoutbtn")
btn.addEventListener('click', () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('logout successfully');
    window.location = "../login/login.html"
  }).catch((error) => {
    console.log(error);
    // An error happened.
  });

})


  window.dltAll = async function () {
    getul.innerHTML = "";
    for (var i = 0; i < ids.length; i++) {
      // console.     log(ids)
      await deleteDoc(doc(db, userUid, ids[i]));
    }

  }




