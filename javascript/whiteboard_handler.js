var note_Creator = document.getElementById("createNote_btn");
var getWhiteboard = document.getElementById("whiteboard");
var stickyColor = "";
//Function to create new sticky note on the whiteboard
note_Creator.addEventListener("click", function(){
    var stickyNote = document.createElement("div");
    stickyNote.className = "col-md-3 stickynote";
    var rowElement = document.createElement("div");
    rowElement.className = "row";
    //Set sticky note color based on selected color from the taskbar
    stickyNote.style = "background-color: " + stickyColor;
    //Add remove button to the sticky note
    var removeBtn = document.createElement("button");
    removeBtn.className = "col-sm-5 delete_Sticky";
    removeBtn.innerText = "x";
    stickyNote.appendChild(rowElement);
    //add function to enable removal of the sticky note
    removeBtn.addEventListener("click", function(){
        getWhiteboard.removeChild(stickyNote);
    })
    //Add an done with edit button to the sticky note
    var editButton = document.createElement("button");
    editButton.className = "col-sm-5 edit_Sticky";
    editButton.innerText = "y";
    var tooltip_text = document.createElement("span");
    tooltip_text.className = "editTooltip";
    tooltip_text.innerText = "Press when sticky is done";
    editButton.appendChild(tooltip_text);
    rowElement.appendChild(editButton);
    rowElement.appendChild(removeBtn);
    editButton.addEventListener("click", function(){
        rowElement.removeChild(editButton);
    });
    //Create event for editing of the sticky note
    stickyNote.addEventListener("click", function(){
        debugger;
    })
    getWhiteboard.appendChild(stickyNote);
})

var getMarkers = document.getElementsByClassName("marker_btns");
for(var i = 0; i < getMarkers.length; i++)
{
    var nextMarker = getMarkers[i];
    nextMarker.addEventListener("click", function(){
        switch(this.id)
        {
            case "color_green":
                stickyColor = "rgb(60, 138, 60)";
            break;
            case "color_yellow":
                stickyColor = "rgb(162, 180, 57)";
            break;
            case "color_blue":
                stickyColor = "rgb(69, 105, 172)";
            break;
            default:
            break;
        }
    })
}