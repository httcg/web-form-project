import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
 
const appSettings = {
    databaseURL: "https://webdevform-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const personalinfoInDB = ref(database, "personalinfo");

const inputFieldEl = document.getElementById("mathclub")
const inputFieldEl2 = document.getElementById("englishclub")
const inputFieldEl3 = document.getElementById("debateclub")

const submitButton5 = document.getElementById("submitform5")

submitButton5.addEventListener("click", function(event) {
    
    let inputValue1 = inputFieldEl.value
    let inputValue2 = inputFieldEl2.value
    let inputValue3 = inputFieldEl3.value

    const mathclub = ref(database, "interest info");
    const englishclub = ref(database,  "interest info");
    const debateclub = ref(database,  "interest info");

   push(mathclub, inputValue1)
   push(englishclub, inputValue2)
   push(debateclub, inputValue3)
   
   document.getElementById("myForm").submit(); 
   window.location.href = "testresult.html"; 

});