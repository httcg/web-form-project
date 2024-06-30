// Function to add a new education row
function addEducationRow() {
  var educationRows = document.getElementById("educationRows");

  // Create a new form row div
  var newRow = document.createElement("div");
  newRow.classList.add("form-row");

  // Generate unique IDs for this new row
  var idPrefix = "row_" + Math.random().toString(36).substr(2, 9); // Unique ID prefix

  // HTML for the new row
  newRow.innerHTML = `
    <div class="input-group">
      <label for="${idPrefix}_level">Level:</label>
      <select id="${idPrefix}_level" class="level" name="level[]" required>
        <option value="">Select Level</option>
        <option value="elementary">Elementary</option>
        <option value="junior-high">Junior High</option>
        <option value="senior-high">Senior High</option>
        <option value="college">College</option>
        <option value="graduate-studies">Graduate Studies</option>
      </select>
    </div>
    <div class="input-group">
      <label for="${idPrefix}_schoolgrad">School Graduated:</label>
      <input type="text" id="${idPrefix}_schoolgrad" class="schoolgrad" name="school[]" placeholder="ex. ABC High School" required />
    </div>
    <div class="form-row type-options">
      <label for="${idPrefix}_public">Public:</label>
      <input type="radio" id="${idPrefix}_public" class="school-stat" name="${idPrefix}_school-stat[]" value="public" required />
      <label for="${idPrefix}_private">Private:</label>
      <input type="radio" id="${idPrefix}_private" class="school-stat" name="${idPrefix}_school-stat[]" value="private" required />
    </div>
  `;

  // Append the new row to the educationRows container
  educationRows.appendChild(newRow);
}
