


export default function createHeader (){
    let maincontainer = document.getElementById("content");
    let headerMake = document.createElement("div");
    headerMake.innerHTML = "<h1>Cafe</h1>";
    headerMake.id = "headerS";
   
    maincontainer.append(headerMake);


}