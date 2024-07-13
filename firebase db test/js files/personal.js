import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
 
const appSettings = {
    databaseURL: "https://webdevform-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);
const personalinfoInDB = ref(database, "personalinfo");

const inputFieldEl = document.getElementById("name")
const inputFieldEl2 = document.getElementById("age")
const inputFieldEl3 = document.getElementById("gender")

const submitButton1 = document.getElementById("submitform")

    submitButton1.addEventListener("click", function(event) {
        
        let inputValue1 = inputFieldEl.value
        let inputValue2 = inputFieldEl2.value
        let inputValue3 = inputFieldEl3.value

        

        const names = ref(database, "personalinfo/name");
        const age = ref(database, "personalinfo/age");
        const gender = ref(database, "personalinfo/gender");

       push(names, inputValue1)
       push(age, inputValue2)
       push(gender, inputValue3)

       document.getElementById("myForm").submit(); 
       window.location.href = "edu.html"; 
       

    });








   











/*
const firebaseConfig = {
    apiKey: "AIzaSyCy_xTkDWGIMD-rHOxQIskxjg46BdthOII",
    authDomain: "webdevform.firebaseapp.com",
    projectId: "webdevform",
    storageBucket: "webdevform.appspot.com",
    messagingSenderId: "448342202752",
    appId: "1:448342202752:web:f36b5e8ef3b95b6ac58965",
    measurementId: "G-RNRFJLXQ92"
  };
  

 

  


form.addEventListener("submit",(e)=>{

  e.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender');
  const civilstats = document.getElementById('civilstats')
  const program = document.getElementById('program');
  const year = document.getElementById('year');
  const section = document.getElementById('section');
  const birthday = document.getElementById('birthday');
  const birthplace = document.getElementById('birthplace');
  


  ref.push({
    name: name,
    age: age,
    gender: gender,
    civilstats: civilstats,
    program: program,
    year: year,
    section: section,
    birthday: birthday,
    birthplace: birthplace

  })


  console.log(name, age, gender, civilstats, program, year, section, birthday, birthplace);
  alert.style.display="block"

  setTimeout(()=>{
    alert.style.display="none"
  }, 2000)

  form.reset;
})


document.getElementById('answer-form').addEventListener('click', function() {
  window.location.href = 'personal-info.html';
});  

/** 
function redirectToNextPage() { 
  document.getElementById("myForm").submit(); 
  window.location.href = "educational-bg.html"; 
}

function redirectToFamilyPage() { 
  document.getElementById("myForm").submit(); 
  window.location.href = "family-info.html"; 
}

function redirectToHealthPage() { 
  document.getElementById("myForm").submit(); 
  window.location.href = "health-info.html"; 
}

function redirectToInterestPage() { 
  document.getElementById("myForm").submit(); 
  window.location.href = "interest-hobby-info.html"; 
}

function redirectToTestResultsPage() { 
  document.getElementById("myForm").submit(); 
  window.location.href = "test-results.html"; 
}

document.getElementById('submit-form').addEventListener('click', function() {
  window.location.href = 'index.html';
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

*/