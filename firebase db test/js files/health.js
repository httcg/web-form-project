import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
 
const appSettings = {
    databaseURL: "https://webdevform-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const personalinfoInDB = ref(database, "personalinfo");

const inputFieldEl = document.getElementById("visionproblem")
const inputFieldEl2 = document.getElementById("reasonvision")
const inputFieldEl3 = document.getElementById("hearingproblem")

const submitButton4 = document.getElementById("submitform4")

submitButton4.addEventListener("click", function(event) {
    
    let inputValue1 = inputFieldEl.value
    let inputValue2 = inputFieldEl2.value
    let inputValue3 = inputFieldEl3.value

    const visionproblem = ref(database, "health info");
    const reasonvision = ref(database, "health info");
    const hearingproblem = ref(database, "health info");

   push(visionproblem, inputValue1)
   push(reasonvision, inputValue2)
   push(hearingproblem, inputValue3)
   
   document.getElementById("myForm").submit(); 
   window.location.href = "interest.html"; 

});