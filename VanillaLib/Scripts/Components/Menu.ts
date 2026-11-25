import { IMenu, HTML_Class } from "./__Include__";
import { EventName } from "./__Include__";

import Component from "./Component";


export default class Menu extends Component implements IMenu {
    
    public constructor(container? : HTMLElement) {
        super(container);
        this.__Main.classList.add(HTML_Class.MENU);
    }
    
    setMenuOption(className : HTML_Class) : void {}
    createMenu() : void {}
    removeMenu() : void {}
    
    public defaultEvent(): void {

        this.__Field.forEach((field)=>{
            field.addEventListener(EventName.CLICK, ()=>{
                field.classList.add(HTML_Class.ACTIVED);
            })
        });
    }
}
