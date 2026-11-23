import * as Decl from "./Enums/HTML";

export class Component {

    

    protected __Element   : HTMLDivElement;
    protected __List      : HTMLElement;
    protected __Item      : NodeListOf<HTMLElement>;


    public constructor() {
        this.__Element  = document.createElement(Decl.Tag.DIV);
        this.__List     = document.createElement(Decl.Tag.DIV);
        this.__Item     = document.createDocumentFragment().childNodes as NodeListOf<HTMLElement>;
    }

    // --- Component Process ------------------------------------------------------
    public createComponent() : void {
        this.__Element.classList.add(Decl.Clss.COMPONENT);
        this.__List.classList.add(Decl.Clss.LIST);
        // this.__Item.
    }

    // public createComponent(htmlStrings : string, container : HTMLElement) : void {

    //     this.__Element = this.getElementFromString(htmlStrings);
    //     container.append(this.__Element);
    // }

    public setComponent(element : HTMLDivElement) : void { 
        
        if(element.classList.contains(Decl.Clss.COMPONENT)){
            this.__Element = element; 
        }
        else {
            console.log("Element is not a component");
        }
    }

    public getComponent () : HTMLDivElement { return this.__Element; }


    // --- Protected Methods -------------------------------------------------------
    protected getElementFromString (htmlString : string) : HTMLDivElement {

        let     parser  = new DOMParser();
        let     doc     = parser.parseFromString(htmlString, "text/html");
        return doc.body.firstElementChild as HTMLDivElement;
    }

}

