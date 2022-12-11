export default function contentFiles (e){
    e.preventDefault();
    let maincontainer = document.getElementById("content");
    maincontainer.innerHTML = "";
    let contentInfo = document.createElement("div");
    contentInfo.innerHTML = "Have some content.";
    contentInfo.id = "contentStuff";
    maincontainer.append(contentInfo);
}