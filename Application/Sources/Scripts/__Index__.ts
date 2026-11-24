import {VanillaLib} from "../../../VanillaLib/VanillaLib"


let header = document.getElementById("__header__") as HTMLElement;
// console.log(header)

let menu = new VanillaLib.Menu(header); 
menu.create();
menu.addItem();
console.log(menu.get())
