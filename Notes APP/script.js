const noteBtn = document.getElementById("add-btn");
const noteTitle = document.getElementById("note-title");
const noteText = document.getElementById("note-text");
const clear = document.querySelector(".clear");

const getNotes = () => {
  let notes = localStorage.getItem("notes")

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
}

noteBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (noteTitle.value == "" || noteText.value == "") {
    return alert("Please add note title and details");
  }

  getNotes()

  let myObj = {
    title: noteTitle.value,
    text: noteText.value
  }

  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));

  document.querySelector("form").reset();
  showNotes();
});

const showNotes = () => {
  getNotes();
  let html = "";
  notesObj.forEach((element, index) => {
    html += `
      <div class="note">
        <div class="note-cta">
          <p class="note-counter">Note ${index + 1}</p>
          <div class="note-btn-cta">
            <button class="note-btn" id="${index}" onclick="deleteNote(this.id)">
              <i class="fas fa-trash"></i> Delete
            </button>
            <button class="note-btn edit-btn" id="${index}" onclick="editNote(this.id)">
              <i class="fas fa-edit"></i> Edit
            </button>
          </div>
        </div>
        <hr />
        <h3 class="note-title">Title: ${element.title}</h3>
        <p class="note-text">${element.text}</p>
      </div>
    `;
  })
  let notesElm = document.getElementById("notes");
  notesElm.innerHTML = html;

  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = "No notes added, please add a note";
  }
}

const deleteNote = (index) => {
  let confirmDel = confirm("Delete this Note");

  if (confirmDel == true) {
    getNotes()
    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes();
  }
}

clear.addEventListener("click", () => {
  localStorage.clear();
  showNotes();
})

const editNote = (index) => {
  if (noteTitle.value !== "" || noteText.value !== "") {
    return alert("Please clear the form before editing");
  }

  getNotes();

  noteTitle.value = notesObj[index].title;
  noteText.value = notesObj[index].text;

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

showNotes();
