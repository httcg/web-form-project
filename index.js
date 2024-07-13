
document.getElementById('answer-form').addEventListener('click', function() {
  window.location.href = 'personal-info.html';
});  

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