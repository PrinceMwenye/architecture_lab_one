// Function to go back to the index.html
function goBack() {
    window.location.href = "index.html";
}

// Function to add a new note to Local Storage
function addNote() {
    const noteText = document.getElementById("noteText").value;
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    
    notes.push({ text: noteText, timestamp: new Date().toLocaleString() });
    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("lastSavedTime").textContent = "Last Saved: " + new Date().toLocaleString();
    document.getElementById("noteText").value = "";
}
