export default function createMainDescription () {
    let maincontainer = document.getElementById("content");
    let mainDescription = document.createElement("div");
    mainDescription.textContent = "Some sample text goes here";
    mainDescription.id = "mainDescrip";
   
    maincontainer.append(mainDescription);


}