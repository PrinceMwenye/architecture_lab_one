// JavaScript for reader.html

// Function to retrieve and display notes from localStorage
function displayNotes() {
    const notesList = document.getElementById('notesList');
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

    notesList.innerHTML = '';

    savedNotes.forEach((note) => {
        const noteText = document.createElement('p');
        noteText.textContent = note.content;
        notesList.appendChild(noteText);
    });
}

// Function to update the last retrieved time
function updateLastRetrievedTime() {
    const lastRetrievedTime = document.getElementById('lastRetrievedTime');
    const currentTime = new Date();
    lastRetrievedTime.textContent = `Last Retrieved: ${currentTime.toLocaleTimeString()}`;
}

// Display existing notes and update the last retrieved time
displayNotes();
updateLastRetrievedTime();

// Retrieve and display notes every 2 seconds
setInterval(() => {
    displayNotes();
    updateLastRetrievedTime();
}, 2000);
