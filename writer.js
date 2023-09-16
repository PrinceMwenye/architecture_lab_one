class Note {
    constructor(index) {
        this.index = index;
        this.textArea = document.createElement('textarea');
        this.removeButton = document.createElement('button');
        this.removeButton.textContent = 'Remove';
        this.removeButton.addEventListener('click', () => this.remove());
        
        // Append the textarea and removeButton to the DOM
        const notesContainer = document.getElementById('notesContainer');
        notesContainer.appendChild(this.textArea);
        notesContainer.appendChild(this.removeButton);
        
        // Load content from localStorage if available
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        if (savedNotes[index]) {
            this.textArea.value = savedNotes[index].content;
        }
        
        // Save content to localStorage when textarea changes
        this.textArea.addEventListener('input', () => this.save());
    }

    remove() {
        this.textArea.remove();
        this.removeButton.remove();
        
        // Remove the note from localStorage
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        savedNotes.splice(this.index, 1);
        localStorage.setItem('notes', JSON.stringify(savedNotes));
        
        // Update the last saved time
        updateLastSavedTime();
    }

    save() {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        savedNotes[this.index] = { content: this.textArea.value };
        localStorage.setItem('notes', JSON.stringify(savedNotes));
        
        // Update the last saved time
        updateLastSavedTime();
    }
}

function addNote() {
    const notesContainer = document.getElementById('notesContainer');
    const newIndex = notesContainer.querySelectorAll('textarea').length;
    new Note(newIndex);
}

// Rest of your code (loadNotes, updateLastSavedTime, event listeners) remains unchanged

// Event listener for the "Add Note" button
document.getElementById('addButton').addEventListener('click', addNote);

// Load existing notes and populate text areas
loadNotes();

// Save notes to localStorage every 2 seconds
setInterval(() => {
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach((textarea, index) => {
        new Note(index); // Reinitialize the notes to update localStorage
    });
}, 2000);
