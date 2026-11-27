import {VanillaLib} from "../../../VanillaLib/VanillaLib"


let mainMenu = document.getElementById("__menu__") as HTMLElement;
// console.log(mainMenu)

let menu = new VanillaLib.Menu(mainMenu); 
menu.create();
menu.addItem("chill");
menu.addItem("about");
menu.defaultEvent();