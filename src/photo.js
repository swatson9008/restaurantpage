export default function createPhotoHeader (){
    let maincontainer = document.getElementById("content");
    let photoHeader = document.createElement("div");
    photoHeader.innerHTML = "<img src='img/cafe.jpg'>";
    photoHeader.id = "photoS";
   
    maincontainer.append(photoHeader);


}