import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
 
const appSettings = {
    databaseURL: "https://webdevform-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const personalinfoInDB = ref(database, "personalinfo");

const inputFieldEl = document.getElementById("fathername")
const inputFieldEl2 = document.getElementById("fatherage")
const inputFieldEl3 = document.getElementById("fstatus")

const submitButton3 = document.getElementById("submitform3")

submitButton3.addEventListener("click", function(event) {
    
    let inputValue1 = inputFieldEl.value
    let inputValue2 = inputFieldEl2.value
    let inputValue3 = inputFieldEl3.value

    const fathername = ref(database, "family info/fatherinfo");
    const fatherage = ref(database, "family info/fatherinfo");
    const fstatus = ref(database, "family info/fatherinfo");

   push(fathername, inputValue1)
   push(fatherage, inputValue2)
   push(fstatus, inputValue3)
   
   document.getElementById("myForm").submit(); 
   window.location.href = "health.html"; 

});