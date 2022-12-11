


export default function createTabS () {
    let tabContain = document.getElementById("tabContain");
    let contentTab = document.createElement("div");
    contentTab.textContent = "Content";
    contentTab.id = "ContentTabS";
   
    tabContain.append(contentTab);

    let menuTab = document.createElement("div");
    menuTab.textContent = "Menu";
    menuTab.id = "MenuTabS";
   
    tabContain.append(menuTab);
};