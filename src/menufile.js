export default function menuFiles (e){
    e.preventDefault();
    let maincontainer = document.getElementById("content");
    maincontainer.innerHTML = "";
    let menuInfo = document.createElement("div");
    menuInfo.innerHTML = "Have some menus.";
    menuInfo.id = "menuStuff";
    maincontainer.append(menuInfo);
}