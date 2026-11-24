import {Tag, Clss, Identify, Selector, IComponent} from "./__Include__";
import Component from "./Component";

export default class Menu extends Component {
    
    public constructor(container? : HTMLElement) {
        super(container);
        this.__Main.classList.add(Clss.MENU);
    }
    
    public addFieldOption(nthItem : number, option : Clss) : void {

        this.__Field[nthItem].classList.add(option);
    }

    public removeFieldOption(nthItem : number) : void {}
}
