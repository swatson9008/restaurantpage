
console.log("testing");

//let maincontainer = document.getElementById("content");




import createHeader from "./header.js";

createHeader();

import createTabS from "./createTabs.js";

createTabS();

import createPhotoHeader from "./photo.js";

createPhotoHeader();

import createMainDescription from "./description.js";

createMainDescription();

import contentFiles from "./contentfile.js"

const contentTabbs = document.getElementById("ContentTabS");
const menuTabbs = document.getElementById("MenuTabS");
const descriptionS = document.getElementById("mainDescrip");

contentTabbs.addEventListener("click", contentFiles);

