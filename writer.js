// JavaScript for writer.html

// Function to load existing notes from localStorage and populate text areas
function loadNotes() {
    const notesContainer = document.getElementById('notesContainer');
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

    savedNotes.forEach((note, index) => {
        const textarea = document.createElement('textarea');
        textarea.value = note.content;
        textarea.setAttribute('data-index', index);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeNote(index));

        notesContainer.appendChild(textarea);
        notesContainer.appendChild(removeButton);
    });
}

// Function to add a new note textarea
function addNote() {
    const notesContainer = document.getElementById('notesContainer');
    const textarea = document.createElement('textarea');
    const removeButton = document.createElement('button');

    const newIndex = notesContainer.querySelectorAll('textarea').length;

    textarea.setAttribute('data-index', newIndex);
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeNoteAndSave(newIndex));

    notesContainer.appendChild(textarea);
    notesContainer.appendChild(removeButton);
}

// Function to remove a note and update local storage
function removeNoteAndSave(index) {
    removeNote(index);

    // Remove the note from localStorage
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    savedNotes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(savedNotes));

    // Update the last saved time
    updateLastSavedTime();
}

// Function to remove a note from the DOM
function removeNote(index) {
    const notesContainer = document.getElementById('notesContainer');
    const textareas = notesContainer.querySelectorAll('textarea');
    
    if (index >= 0 && index < textareas.length) {
        textareas[index].remove();
        textareas[index + 1].remove(); // Remove the corresponding Remove button
    }
}

// Function to update the last saved time
function updateLastSavedTime() {
    const lastSavedTime = document.getElementById('lastSavedTime');
    const currentTime = new Date();
    lastSavedTime.textContent = `Last Saved: ${currentTime.toLocaleTimeString()}`;
}

// Event listener for the "Add Note" button
document.getElementById('addButton').addEventListener('click', addNote);

// Load existing notes and populate text areas
loadNotes();

// Save notes to localStorage every 2 seconds
setInterval(() => {
    const textareas = document.querySelectorAll('textarea');
    const notes = [];

    textareas.forEach((textarea) => {
        notes.push({ content: textarea.value });
    });

    localStorage.setItem('notes', JSON.stringify(notes));

    // Update the last saved time
    updateLastSavedTime();
}, 2000);
