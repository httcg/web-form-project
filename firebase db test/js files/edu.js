import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
 
const appSettings = {
    databaseURL: "https://webdevform-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const personalinfoInDB = ref(database, "personalinfo");

const educinputFieldEl = document.getElementById("educlevel")
const educinputFieldEl2 = document.getElementById("school")
const educinputFieldEl3 = document.getElementById("schoolstat")

const submitButton2 = document.getElementById("submitform2")

submitButton2.addEventListener("click", function(event) {
    
    let educinputValue1 = educinputFieldEl.value
    let educinputValue2 = educinputFieldEl2.value
    let educinputValue3 = educinputFieldEl3.value

    const educlevel = ref(database, "educationalinfo");
    const school = ref(database, "educationalinfo");
    const schoolstat = ref(database, "educationalinfo");

   push(educlevel, educinputValue1)
   push(school, educinputValue2)
   push(schoolstat, educinputValue3)
   
   document.getElementById("myForm").submit(); 
   window.location.href = "family.html"; 

});


function addEducationRow() {
    const educationRows = document.getElementById("educationRows");
    const newRow = educationRows.firstElementChild.cloneNode(true);
  
    newRow.querySelectorAll("input[type='text'], input[type='radio']").forEach(input => input.value = "");
  
    // add a delete button to the new row
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    newRow.append(deleteButton);
  
    deleteButton.addEventListener("click", function() {
      this.parentElement.remove();
    });
  
    educationRows.appendChild(newRow);
  }
  