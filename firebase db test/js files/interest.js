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
const inputFieldEl4 = document.getElementById("speechclub")
//const inputFieldEl5 = document.getElementById("speechproblem")
const inputFieldEl6 = document.getElementById("scienceclub")
const inputFieldEl7 = document.getElementById("otherclub")
const inputFieldEl8 = document.getElementById("quizzerclub")
const inputFieldEl9 = document.getElementById("favesubject")
const inputFieldEl10 = document.getElementById("leastfavesubject")
const inputFieldEl11= document.getElementById("hobby1")
const inputFieldEl12= document.getElementById("hobby2")
const inputFieldEl13= document.getElementById("hobby3")
const inputFieldEl14= document.getElementById("hobby4")
const inputFieldEl15 = document.getElementById("hobby5")
const inputFieldEl16= document.getElementById("hobby6")
const inputFieldEl17= document.getElementById("hobby7")
const inputFieldEl18= document.getElementById("hobby8")
const inputFieldEl19= document.getElementById("hobby9")
const inputFieldEl20= document.getElementById("hobby10")
const inputFieldEl21= document.getElementById("athletics")
const inputFieldEl22= document.getElementById("geeclub")
const inputFieldEl23= document.getElementById("religiousorg")
const inputFieldEl24= document.getElementById("otherinterest")
const inputFieldEl25= document.getElementById("chessclub")
const inputFieldEl26= document.getElementById("officer")
const inputFieldEl27= document.getElementById("memeber")
const inputFieldEl28= document.getElementById("otherpost")
const inputFieldEl29 = document.getElementById("otherclubtext")
const inputFieldEl30 = document.getElementById("otherinteresttext")
const inputFieldEl31 = document.getElementById("otherposttext")

const submitButton5 = document.getElementById("submitform5")
    
    submitButton5.addEventListener("click", function(event) {
    
        let inputValue1 = inputFieldEl.value
        let inputValue2 = inputFieldEl2.value
        let inputValue3 = inputFieldEl3.value
        let inputValue4 = inputFieldEl4.value
        //let inputValue5 = inputFieldEl5.value
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
        let inputValue19 = inputFieldEl19.value
        let inputValue20 = inputFieldEl20.value
        let inputValue21 = inputFieldEl21.value
        let inputValue22 = inputFieldEl22.value
        let inputValue23 = inputFieldEl23.value
        let inputValue24 = inputFieldEl24.value
        let inputValue25 = inputFieldEl25.value
        let inputValue26 = inputFieldEl26.value
        let inputValue27 = inputFieldEl27.value
        let inputValue28 = inputFieldEl28.value
        let inputValue29 = inputFieldEl29.value
        let inputValue30 = inputFieldEl30.value
        let inputValue31 = inputFieldEl31.value

        const confirmation = confirm("This is the last part of the form. Proceed to submit?");

        const mathclub = ref(database, "interest info/club");
        const englishclub = ref(database,  "interest info/club");
        const debateclub = ref(database,  "interest info/club");
        const speechclub = ref(database, "interest info/club");
        const scienceclub = ref(database,  "interest info/club");
        const otherclub = ref(database,  "interest info/club");
        const quizzerclub = ref(database,  "interest info/club");
        const favesubject = ref(database,  "interest info/subject");
        const leastfavesubject = ref(database,  "interest info/subject");
        const hobby1 = ref(database,  "interest info/hobbies");
        const hobby2 = ref(database,  "interest info/hobbies");
        const hobby3 = ref(database,  "interest info/hobbies");
        const hobby4 = ref(database,  "interest info/hobbies");
        const hobby5 = ref(database,  "interest info/hobbies");
        const hobby6 = ref(database,  "interest info/hobbies");
        const hobby7 = ref(database,  "interest info/hobbies");
        const hobby8 = ref(database,  "interest info/hobbies");
        const hobby9 = ref(database,  "interest info/hobbies");
        const hobby10 = ref(database,  "interest info/hobbies");
        const athletics = ref(database,  "interest info/org");
        const geeclub = ref(database,  "interest info/org");
        const religiousorg = ref(database,  "interest info/org");
        const otherinterest = ref(database,  "interest info/org");
        const chessclub = ref(database,  "interest info/org");
        const officer = ref(database,  "interest info/org");
        const memeber = ref(database,  "interest info/org");
        const otherpost = ref(database,  "interest info/org");
        const otherclubtext = ref(database,  "interest info/club");
        const otherinteresttext = ref(database,  "interest info/org");
        const otherposttext = ref(database,  "interest info/org");

        push(mathclub, inputValue1)
        push(englishclub, inputValue2)
        push(debateclub, inputValue3)
        push(speechclub, inputValue4)
        //push(program, inputValue5)
        push(scienceclub, inputValue6)
        push(otherclub, inputValue7)
        push(quizzerclub, inputValue8)
        push(favesubject, inputValue9)
        push(leastfavesubject, inputValue10)
        push(hobby1, inputValue11)
        push(hobby2, inputValue12)
        push(hobby3, inputValue13)
        push(hobby4, inputValue14)
        push(hobby5, inputValue15)
        push(hobby6, inputValue16)
        push(hobby7, inputValue17)
        push(hobby8, inputValue18)
        push(hobby9, inputValue19)
        push(hobby10, inputValue20)
        push(athletics, inputValue21)
        push(geeclub, inputValue22)   
        push(religiousorg, inputValue23)
        push(otherinterest, inputValue24)
        push(chessclub, inputValue25)
        push(officer, inputValue26)
        push(memeber, inputValue27)
        push(otherpost, inputValue28)
        push(otherclubtext, inputValue29)
        push(otherinteresttext, inputValue30)
        push(otherposttext, inputValue31)

});
  document.getElementById("myForm").submit(); 
  window.location.href = "testresult.html"; 

function showConfirmationDialog(event) {
  event.preventDefault();
  const confirmation = confirm("Do you really want to leave this page? Your progress will not be saved.");
  if (confirmation) {
    window.location.href = event.target.href;
  }
}

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
  link.addEventListener('click', showConfirmationDialog);
});
