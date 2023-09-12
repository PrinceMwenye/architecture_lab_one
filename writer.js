// // Function to go back to the index.html
// function goBack() {
//     window.location.href = "index.html";
// }

// // Function to add a new note to Local Storage
// function addNote() {
//     const noteText = document.getElementById("noteText").value;
//     const notes = JSON.parse(localStorage.getItem("notes")) || [];
    
//     notes.push({ text: noteText, timestamp: new Date().toLocaleString() });
//     localStorage.setItem("notes", JSON.stringify(notes));

//     document.getElementById("lastSavedTime").textContent = "Last Saved: " + new Date().toLocaleString();
//     document.getElementById("noteText").value = "";
// }

// Function to populate existing notes in textareas
function populateExistingNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach((note, index) => {
        const textarea = document.createElement("textarea");
        textarea.id = `noteText${index}`;
        textarea.rows = 4;
        textarea.cols = 50;
        textarea.value = note.text; // Set the value of the textarea to the note's text property
        document.body.insertBefore(textarea, document.getElementById("lastSavedTime"));
    });
}

// Call the populateExistingNotes function when the page loads
window.onload = function () {
    populateExistingNotes();
};


// Call the populateExistingNotes function when the page loads
window.onload = function () {
    populateExistingNotes();
};

  
// Function to add a new note
function addNote() {
    const noteText = document.getElementById("noteText").value;
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    // Push the new note as an object with text and timestamp
    notes.push({ text: noteText, timestamp: new Date().toLocaleString() });
    
    // Store the updated notes array in localStorage
    localStorage.setItem("notes", JSON.stringify(notes));

    // Clear the textarea and repopulate existing notes
    document.getElementById("noteText").value = "";
    document.querySelectorAll("textarea[id^='noteText']").forEach((textarea) => {
        textarea.remove();
    });
    populateExistingNotes();
}

  
  // Function to go back to the home page
  function goBack() {
    window.location.href = "index.html"; 
  }
  
  // When the page loads, populate existing notes
  window.onload = function () {
    populateExistingNotes();
  };
  