import { MenuInterface, HTML_Class } from "./__Include__";
import { EventName } from "./__Include__";

import Component from "./Component";


export default class Menu extends Component {

    public constructor(container : HTMLElement, isSubMenu : boolean = false) {
        super(container);
        this.__Main.classList.add(HTML_Class.MENU);
        if(isSubMenu) this.__Main.classList.add(HTML_Class.SUB);
    }
    
    public defaultEvent(): void {

        this.__Field.forEach((field)=>{

            this.__Overlay.addEventListener(EventName.CLICK, ()=> {
                field.classList.remove(HTML_Class.ACTIVED);
            });
            
            field.addEventListener(EventName.CLICK, ()=>{

                if(!field.classList.contains(HTML_Class.ACTIVED)) {
                    
                    this.__Field.forEach((e)=>{
                        e.classList.remove(HTML_Class.ACTIVED);
                    });

                    field.classList.add(HTML_Class.ACTIVED);
                }
                else {
                    field.classList.remove(HTML_Class.ACTIVED);
                }
            }, )
        }, this);
    }
}
