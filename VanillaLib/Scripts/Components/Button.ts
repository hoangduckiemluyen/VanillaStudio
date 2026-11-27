import { HTML_Class } from "./__Include__";
import { EventName } from "./__Include__";

import Component from "./Component";

export default class Button extends Component {

    constructor() {
        super();
    }

    public update(element : HTMLElement) {
        this.__Main = element;
    }

    // public defaultEvent(): void {
    
    //     this.__Field.forEach((field)=>{

    //         this.__Overlay.addEventListener(EventName.CLICK, ()=> {
    //             field.classList.remove(HTML_Class.ACTIVED);
    //         });
            
    //         field.addEventListener(EventName.CLICK, ()=>{

    //             if(!field.classList.contains(HTML_Class.ACTIVED)) {
    //                 this.__Field.forEach((e)=>{
    //                     e.classList.remove(HTML_Class.ACTIVED);
    //                 });
    //                 field.classList.add(HTML_Class.ACTIVED);
    //             }
    //             else {
    //                 field.classList.remove(HTML_Class.ACTIVED);
    //             }
    //         }, )
    //     }, this);
    // }
}
