document.getElementById('answer-form').addEventListener('click', function() {
    window.location.href = 'personal.html';
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
  