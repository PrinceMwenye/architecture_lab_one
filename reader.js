// Function to go back to the index.html
function goBack() {
    window.location.href = "index.html";
}

// Function to display saved notes from Local Storage
function displayNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const noteList = document.getElementById("noteList");

    if (notes.length === 0) {
        noteList.innerHTML = "<p>No notes found.</p>";
    } else {
        noteList.innerHTML = "";
        notes.forEach(note => {
            const noteDiv = document.createElement("div");
            noteDiv.textContent = `Note: ${note.text}, Saved At: ${note.timestamp}`;
            noteList.appendChild(noteDiv);
        });
    }
}

// Call the displayNotes function when the page loads
window.addEventListener("load", displayNotes);
