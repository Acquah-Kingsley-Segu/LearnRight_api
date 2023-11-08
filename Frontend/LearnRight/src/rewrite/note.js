const addbutton = document.getElementById("addButton");
const textarea = document.getElementById("floatingTextarea");
const title = document.getElementById("titlearea");
const notes = document.getElementById("notes");
const notecards = document.getElementsByClassName("noteCard");
const searchtxt = document.getElementById("searchTxt");
var time = new Date().toLocaleDateString();
shownotes();

addbutton.addEventListener("click", () => {
    if (textarea.value != "") {
        let savednotes = localStorage.getItem("savednotes");
        // Declaring a localstorage named as savednotes

        if (savednotes == null) {
            notesArray = [];
        } else {
            notesArray = JSON.parse(savednotes);
        }
        if (title.value == "") {
            notesArray.push([time.toString(), textarea.value]);
        } else {
            notesArray.push([title.value, textarea.value]);
        }
        // console.log(notesArray);
        localStorage.setItem("savednotes", JSON.stringify(notesArray));
        title.value = "";
        textarea.value = "";
        shownotes();
    } else {
        alert("Type something to save");
    }

});

function shownotes() {
    let savednotes = localStorage.getItem("savednotes");

    if (savednotes == null) {
        notesArray = [];
    } else {
        notesArray = JSON.parse(savednotes);
    }

    let cardhtml = "";
    notesArray.forEach(element => {
        cardhtml += `<div class="card my-3 mx-3 noteCard" style="width: 20rem; border: 1px solid black;">
        <div class="card-body">
          <h5 class="card-title">${element[0]}</h5>
          <p class="card-text">${element[1]}</p>
          <button id = "${notesArray.indexOf(element)}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete note</button>
          <button onclick = "markorunmark(${notesArray.indexOf(element)})" class="btn btn-primary my-2">Edit Note</button>
        </div>
      </div>`;
    });

    if (notesArray.length != 0) {
        notes.innerHTML = cardhtml;
    } else {
        notes.innerHTML = `Nothing to show.Please add notes...`;
    }
}

function deleteNote(index) {
    if (confirm("Confirm before deleting")) {
        let savednotes = localStorage.getItem("savednotes");

        if (savednotes == null) {
            notesArray = [];
        } else {
            notesArray = JSON.parse(savednotes);
        }

        notesArray.splice(index, 1);
        localStorage.setItem("savednotes", JSON.stringify(notesArray));
        shownotes();
    }
}

searchtxt.addEventListener("input", () => {
    var inputValue = searchtxt.value.toLowerCase();
    Array.from(notecards).forEach(function (element) {
        // console.log(element);
        let cardtitle = element.getElementsByTagName("h5")[0].innerText.toLowerCase();
        let cardtext = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        if (cardtext.includes(inputValue) || cardtitle.includes(inputValue)) {
            element.style.display = "block";
           // element.style.background = "#cdd0d4";
        } else {
            element.style.display = "none";
        }

        if(inputValue == ""){
            element.style.background = "none";
        }
    });
});

function markorunmark(i){

    let markUnmarkButton =   notecards[i].getElementsByTagName("button")[1];
    if(markUnmarkButton.innerText == "Mark as Imp"){
        notecards[i].style.border = "4px solid #0D6EFD";
        markUnmarkButton.innerText = "Unmark";
    }else{
        notecards[i].style.border = "1px solid black";
        markUnmarkButton.innerText = "Mark as Imp";
    }
    
}