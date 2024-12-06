import "./style.css";
import fileIcon from "./img/file.svg";

const fileUploadButton = document.querySelector("#file-upload-button");
const fileUploadInput = document.querySelector("#file-upload");

const fileDropbox = document.querySelector("#file-dropbox");

fileUploadButton.addEventListener("click", e => {
    if(fileUploadInput)
        fileUploadInput.click();
});

fileDropbox.addEventListener("click", e => {
    if(fileUploadInput)
        fileUploadInput.click();
});

fileUploadInput.addEventListener("change", e => {
    updateFileList(fileUploadInput.files);
});

document.addEventListener("dragstart", handleDragStart);
document.addEventListener("dragenter", handleDragEnter);
document.addEventListener("dragexit", handleDragExit);
document.addEventListener("dragover", handleDragOver);
document.addEventListener("drop", handleDrop);

function handleDragStart(e){
    e.preventDefault();
}

function handleDragEnter(e) {
    e.stopPropagation();
    e.preventDefault();
    fileDropbox.classList.add("highlight");
}

function handleDragExit(e){
    fileDropbox.classList.remove("highlight");
}

function handleDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
}

function handleDrop(e) {
    e.stopPropagation();
    e.preventDefault();
    fileDropbox.classList.remove("highlight");

    const dt = e.dataTransfer;
    const files = dt.files;

    handleFileDrop(files);
}

function handleFileDrop(files){
    fileUploadInput.files = files;
    updateFileList(fileUploadInput.files);
}

const fileListWrapper = document.querySelector("#file-list");

function updateFileList(files){
    fileListWrapper.innerHTML = "";
    console.log(files);
    Array.from(files).forEach(file => addFileToList(file.name)); 
}

function addFileToList(fileName){
    const newFileItem = document.createElement("div");
    newFileItem.classList.add("file-list-item");
    const fileNameParts = fileName.split(".");
    const fileType = fileNameParts[fileNameParts.length-1];
    console.log(fileType)
    newFileItem.innerHTML = `
        <div class="file-item-icon-wrapper" data-file-type=${fileType}>
            <img src=${fileIcon} alt="file icon" class="file-item-icon">
        </div>
        <p class="file-item-name">${fileName}</p>
    `;
    fileListWrapper.append(newFileItem);
}

`
 <div class="file-list-item">
                <img src="./img/file.svg" alt="file icon" class="file-item-icon">
                <p class="file-item-name">Empty file.png</p>
            </div>
            `