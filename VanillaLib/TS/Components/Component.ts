import {Tag, Clss, Identify, Selector, IComponent} from "./__Include__";

export default class Component implements IComponent {
    

    protected __Container               : HTMLElement;
    protected __Main                    : HTMLElement;
    protected __List                    : HTMLElement;
    protected __Item                    : HTMLElement[];
    protected __Field                   : HTMLElement[];


    public constructor(container? : HTMLElement) {

        this.__Container                = container ? container : document.createElement(Tag.DIV);
        this.__Main                     = document.createElement(Tag.DIV);
        this.__List                     = document.createElement(Tag.UL);
        this.__Item                     = [];
        this.__Field                    = [];
    }

    // --- Component Process ------------------------------------------------------
    public setContainer(container: HTMLElement) : void {
        this.__Container    = container ? container : document.createElement(Tag.DIV);
    }

    public create() {
        this.__Main.classList.add(Clss.COMPONENT);

        this.__List.classList.add(Clss.LIST);
        this.__Main.appendChild(this.__List);
        this.__Container.appendChild(this.__Main);
    }

    public setClassName(className : string[]) : void {
        className.forEach((name)=> {
            this.__Main.classList.add(name);
        })
    }
    
    public addComponentOption(clss : Clss) : void {
        this.__Main.classList.add(clss);
    }

    public removeComponentOption(clss : Clss) : void {
        this.__Main.classList.remove(clss);
    }

    public addItem(text? : string) : void {
        let item    : HTMLElement = document.createElement(Tag.LI);
        let field   : HTMLElement = document.createElement(Tag.BUTTON);
        item.classList.add(Clss.ITEM);
        field.classList.add(Clss.FIELD);
        field.textContent = text ? text : Tag.BUTTON;
        item.appendChild(field);
        this.__Item.push(item);
        this.__Field.push(field);
        this.__List.appendChild(item);
    }
 
    public set(element : HTMLElement): void {
        if(element.classList.contains("div")){
            this.__Main = element; 
        }
        else {
            console.log("Element is not a component");
        }
    }
    public get() : HTMLElement { return this.__Main;  }
    public event(): void {

    }

    // --- Protected Methods -------------------------------------------------------
    protected getElementFromString (htmlString : string) : HTMLDivElement {

        let     parser  = new DOMParser();
        let     doc     = parser.parseFromString(htmlString, "text/html");
        return doc.body.firstElementChild as HTMLDivElement;
    }

}

