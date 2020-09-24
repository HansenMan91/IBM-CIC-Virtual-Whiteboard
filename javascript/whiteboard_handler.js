var create_StickyNote = document.getElementsByClassName("createStickyNote");
debugger;
var getWhiteboard = document.getElementById("whiteboard");
var stickyColor = "";
//Function to create new sticky note on the whiteboard
for (var i = 0; i < create_StickyNote.length; i++) {
    var nextStickyNote = create_StickyNote[i];
    nextStickyNote.addEventListener("click", function () {
        CreateStickyNote(this.id)
    })
}

function CreateStickyNote(stickyType) {
    var stickyNote = document.createElement("div");
    stickyNote.className = "col-md-3 stickynote";
    var rowElement = document.createElement("div");
    rowElement.className = "row";
    //Set sticky note color based on selected color from the taskbar
    stickyNote.style = "background-color: " + stickyColor;
    //Add remove button to the sticky note
    var removeBtn = document.createElement("button");
    removeBtn.className = "col-md-5 delete_Sticky";
    removeBtn.innerText = "x";
    stickyNote.appendChild(rowElement);
    //add function to enable removal of the sticky note
    removeBtn.addEventListener("click", function () {
        getWhiteboard.removeChild(stickyNote);
    })
    //Add an done with edit button to the sticky note
    var editButton = document.createElement("button");
    editButton.className = "col-md-5 edit_Sticky";
    editButton.innerText = "y";
    var tooltip_text = document.createElement("span");
    tooltip_text.className = "editTooltip";
    tooltip_text.innerText = "Press when sticky is done";
    editButton.appendChild(tooltip_text);
    rowElement.appendChild(editButton);
    rowElement.appendChild(removeBtn);
    editButton.addEventListener("click", function () {
        rowElement.removeChild(editButton);
    });
    //Create event for editing of the sticky note
    stickyNote.addEventListener("click", function () {
        debugger;
    })
    //Add Content to Sticky
    switch(stickyType)
    {
        case "createText_btn":
            textSticky(rowElement);
        break;
        case "createImg_btn":
            imgSticky(rowElement);
        break;
        case "createVideo_btn":
        break;
        default:
        break;
    }
    getWhiteboard.appendChild(stickyNote);
}
function textSticky(stickyNote_div)
{
    var textNote = document.createElement("textarea");
    textNote.className = "col-md-12 createText_btn";
    stickyNote_div.appendChild(textNote);
}
function imgSticky(stickyNote_div)
{
    var img_container = document.createElement("div");
    img_container.className = "col-md-12";
    var img_file = document.createElement("img");
    img_file.className = "createImg_btn";
    img_file.src = "";
    img_container.appendChild(img_file);
    stickyNote_div.appendChild(img_container);
}
function videoSticky(stickyNote_div)
{
    var video_container = document.createElement("div");
    video_container.className = "col-md-12";
    var video_file = document.createElement("video");
    video_file.width = "280";
    video_file.height = "200";
    video_file.preload = "auto";
    video_file.autoplay = "true";
    video_file.loop = "true";
    video_file.muted = "muted";
    video_file.volume = "0";
    var video_src = document.createElement("source");
    video_src.src = "";
    video_src.type = "video/mp4";
    video_container.appendChild(video_file);
    video_container.appendChild(video_src);
    stickyNote_div.appendChild(video_container);
}

var getMarkers = document.getElementsByClassName("marker_btns");
for (var i = 0; i < getMarkers.length; i++) {
    var nextMarker = getMarkers[i];
    nextMarker.addEventListener("click", function () {
        switch (this.id) {
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

var addImg_btn = document.getElementById("sticky_image");
addImg_btn.addEventListener("click", function () {

})
var addtxt_btn = document.getElementById("sticky_text");
addImg_btn.addEventListener("click", function () {
    var text_field = document.createElement("textarea");
})