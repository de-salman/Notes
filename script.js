const newNote = document.getElementById("newnote")

newNote.addEventListener('click',()=>{
    const note = document.createElement("div");
    note.className = "col-lg-3 notes"
    note.innerHTML= `
                    <div class="main">
                        <div class="top-btn">
                            <button class="btn-in" id="edit"><i class="far fa-edit"></i></button>
                            <button class="btn-in" id="delete"><i class="far fa-trash-alt"></i></i></button>
                        </div>
                        <div class="noted hidden" id="unedit"></div>
                        <textarea></textarea>    
                    </div>            
        `;

    document.getElementById("row1").appendChild(note);


    const editBtn = note.querySelector("#edit");
    const deleteBtn = note.querySelector("#delete");
    const noted = note.querySelector("#unedit");
    const textArea = note.querySelector("textarea");


    editBtn.addEventListener('click',()=>{
        textArea.classList.toggle("hidden")
        noted.classList.toggle("hidden")
        note.querySelector("#unedit").innerHTML=textArea.value;




    });

    deleteBtn.addEventListener('click',()=>{
        note.remove();
    });

});

















