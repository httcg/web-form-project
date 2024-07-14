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
const inputFieldEl4 = document.getElementById("civilstats")
const inputFieldEl5 = document.getElementById("program")
const inputFieldEl6 = document.getElementById("year")
const inputFieldEl7 = document.getElementById("section")
const inputFieldEl8 = document.getElementById("birthday")
const inputFieldEl9 = document.getElementById("birthplace")
const inputFieldEl10 = document.getElementById("email")
const inputFieldEl11= document.getElementById("cityadd")
const inputFieldEl12= document.getElementById("provincialadd")
const inputFieldEl13= document.getElementById("height")
const inputFieldEl14= document.getElementById("weight")
const inputFieldEl15= document.getElementById("complexion")
const inputFieldEl16= document.getElementById("telephone")
const inputFieldEl17= document.getElementById("HSgwa")
const inputFieldEl18= document.getElementById("religion")
//const inputFieldEl19= document.getElementById("gender")
const inputFieldEl20= document.getElementById("empname")
const inputFieldEl21= document.getElementById("empadd")
const inputFieldEl22= document.getElementById("contactname")
const inputFieldEl23= document.getElementById("relationship")
const inputFieldEl24= document.getElementById("contactadd")
const inputFieldEl25= document.getElementById("contactno")


const submitButton1 = document.getElementById("submitform")

    submitButton1.addEventListener("click", function(event) {
        
        let inputValue1 = inputFieldEl.value
        let inputValue2 = inputFieldEl2.value
        let inputValue3 = inputFieldEl3.value
        let inputValue4 = inputFieldEl4.value
        let inputValue5 = inputFieldEl5.value
        let inputValue6 = inputFieldEl6.value
        let inputValue7 = inputFieldEl7.value
        let inputValue8 = inputFieldEl8.value
        let inputValue9 = inputFieldEl9.value
        let inputValue10 = inputFieldEl10.value
        let inputValue11 = inputFieldEl11.value
        let inputValue12 = inputFieldEl12.value
        let inputValue13 = inputFieldEl13.value
        let inputValue14 = inputFieldEl14.value
        let inputValue15 = inputFieldEl15.value
        let inputValue16 = inputFieldEl16.value
        let inputValue17 = inputFieldEl17.value
        let inputValue18 = inputFieldEl18.value
        //let inputValue19 = inputFieldEl19.value
        let inputValue20 = inputFieldEl20.value
        let inputValue21 = inputFieldEl21.value
        let inputValue22 = inputFieldEl22.value
        let inputValue23 = inputFieldEl23.value
        let inputValue24 = inputFieldEl24.value
        let inputValue25 = inputFieldEl25.value
      

        const names = ref(database, "personal info/name");
        const age = ref(database, "personal info/age");
        const gender = ref(database, "personal info/gender");
        const civilstats = ref(database, "personal info/civilstats");
        const program = ref(database, "personal info/program");
        const year = ref(database, "personal info/year");
        const section = ref(database, "personal info/section");
        const birthday = ref(database, "personal info/birthday");
        const birthplace = ref(database, "personal info/birthplace");
        const email = ref(database, "personal info/email");
        const cityadd = ref(database, "personal info/cityadd");
        const provincialadd = ref(database, "personal info/provincialadd");
        const height = ref(database, "personal info/height");
        const weight = ref(database, "personal info/weight");
        const complexion = ref(database, "personal info/complexion");
        const telephone = ref(database, "personal info/telephone");
        const HSgwa = ref(database, "personal info/HSgwa");
        const religion = ref(database, "personal info/religion");
        const empname = ref(database, "personal info/empname");
        const empadd = ref(database, "personal info/empadd");
        const contactname = ref(database, "personal info/contactname");
        const relationship = ref(database, "personal info/relationship");
        const contactadd = ref(database, "personal info/contactadd");
        const contactno = ref(database, "personal info/contactno");


       push(names, inputValue1)
       push(age, inputValue2)
       push(gender, inputValue3)
       push(civilstats, inputValue4)
       push(program, inputValue5)
       push(year, inputValue6)
       push(section, inputValue7)
       push(birthday, inputValue8)
       push(birthplace, inputValue9)
       push(email, inputValue10)
       push(cityadd, inputValue11)
       push(provincialadd, inputValue12)
       push(height, inputValue13)
       push(weight, inputValue14)
       push(complexion, inputValue15)
       push(telephone, inputValue16)
       push(HSgwa, inputValue17)
       push(religion, inputValue18)
       push(empname, inputValue20)
       push(empadd, inputValue21)
       push(contactname, inputValue22)
       push(relationship, inputValue23)
       push(contactadd, inputValue24)
       push(contactno, inputValue25)

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