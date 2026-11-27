/**
 * @file Component.ts
 * @description This is Component class, using for inheritance.
 * @author Hoang Duc Kiem Luyen
 * @created 2026-11-25
 */

import {ComponentDepth, HTML_Class, HTML_Tag, JsonData, ComponentInterface} from "./__Include__";

type ComponentType = {
    tag         : string,
    text        : string,
    classes     : string [],
    child       : object[],
}

export default class Component implements ComponentInterface {
    
    
    public static readonly Depth =  ComponentDepth ; 

    protected __Container               : HTMLElement;
    protected __Main                    : HTMLElement;
    protected __Overlay                 : HTMLElement;
    protected __List                    : HTMLElement;
    protected __Item                    : HTMLElement[];
    protected __Field                   : HTMLElement[];

    public constructor(container? : HTMLElement) {

        this.__Container                = container ? container : document.createElement(HTML_Tag.DIV);
        this.__Main                     = document.createElement(HTML_Tag.DIV);
        this.__Overlay                  = document.createElement(HTML_Tag.DIV);
        this.__List                     = document.createElement(HTML_Tag.UL);
        this.__Item                     = [];
        this.__Field                    = [];
    }

    public setContainer(container: HTMLElement) : void {
        this.__Container = container ? container : document.createElement(HTML_Tag.DIV);
    }

    public create() {
        let object = JSON.parse(JsonData.MENU) as ComponentType;
        let rawData : ComponentType = {
            tag         : object.tag,
            text        : object.text,
            classes     : object.classes as string[],
            child       : object.child as object[],
        }
        let isRunning : boolean = true;
        let data : ComponentType = {
            tag : "",
            text: "",
            classes : [],
            child : [],
        };

        this.__Main = document.createElement(rawData.tag);
        this.__Main.textContent = rawData.text;
        rawData.classes.forEach((e)=>{
            this.__Main.classList.add(e);
        });

        while(isRunning) {
            
            let child: object[] = [];

            rawData.child.forEach((e, i) => {
                // console.log(e)
            });
            if(rawData.child.length) {
                isRunning = false;
            }
        }
    }

    public update(element : HTMLElement): void {
            this.__Main     = element; 
            this.__Overlay  = element.querySelector(":scope > .overlay") as HTMLElement;
            this.__List     = element.querySelector(":scope > .list") as HTMLElement;
            let items       = this.__Main.querySelectorAll(':scope > .list > .item') as NodeListOf<HTMLElement>;
            let fields      = this.__Main.querySelectorAll(':scope > .list > .item > .field') as NodeListOf<HTMLElement>;

            // collecting items
            items.forEach((e, i) => {
                this.__Item[i] = e;
            })

            // collecting fields
            fields.forEach((e, i) => {
                this.__Field[i] = e;
            });
            console.log(this.__Field);
        
    }

    public read() : HTMLElement { return this.__Main;  }

    public delete() : void { }

    public addClassName(elementDepth : ComponentDepth, className : string[], offset : number) : void {
        
        switch (elementDepth) {
            case ComponentDepth.COMPONENT:{
                className.forEach((name)=>{
                    this.__Main.classList.add(name);
                });
                break;
            }
            case ComponentDepth.LIST:{
                className.forEach((name)=>{
                    this.__Main.classList.add(name);
                });
                break;
            }
            case ComponentDepth.ITEM:{
                className.forEach((name)=>{
                    if(offset <= this.__Item.length - 1) {
                        this.__Item[offset].classList.add(name);
                    }
                });
                break;
            }
            case ComponentDepth.FIELD: {
                className.forEach((name)=>{
                    if(offset <= this.__Field.length - 1) {
                        this.__Field[offset].classList.add(name);
                    }
                });
                break;
            }
            default: {
                className.forEach((name)=>{
                    this.__Main.classList.add(name);
                });
            }
        }
    }

    public removeClassName(elementDepth : ComponentDepth, className : string[], offset : number) : void {
        
        switch (elementDepth) {
            case ComponentDepth.COMPONENT:{
                className.forEach((name)=>{
                    this.__Main.classList.add(name);
                });
                break;
            }
            case ComponentDepth.LIST:{
                className.forEach((name)=>{
                    this.__Main.classList.add(name);
                });
                break;
            }
            case ComponentDepth.ITEM:{
                className.forEach((name)=>{
                    if(offset <= this.__Item.length - 1) {
                        this.__Item[offset].classList.add(name);
                    }
                });
                break;
            }
            case ComponentDepth.FIELD: {
                className.forEach((name)=>{
                    if(offset <= this.__Field.length - 1) {
                        this.__Field[offset].classList.add(name);
                    }
                });
                break;
            }
            default: {
                className.forEach((name)=>{
                    this.__Main.classList.add(name);
                });
            }
        }
    }

    public containClassName(elementDepth : ComponentDepth, className : string, offset : number) : boolean {
        
        switch (elementDepth) {
            case ComponentDepth.COMPONENT:{
                return this.__Main.classList.contains(className);
            }
            case ComponentDepth.LIST:{
                return this.__List.classList.contains(className);
            }
            case ComponentDepth.ITEM:{
                if(offset <= this.__Field.length - 1) {
                    return this.__Item[offset].classList.contains(className);
                }
                break;
            }
            case ComponentDepth.FIELD: {
                if(offset <= this.__Field.length - 1) {
                    return this.__Field[offset].classList.contains(className);
                }
                break;
            }
            default: {
                return this.__Main.classList.contains(className);
            }
        }
        return false
    }
    
    public addItem(text? : string) : void {
        let item    : HTMLElement = document.createElement(HTML_Tag.LI);
        let field   : HTMLElement = document.createElement(HTML_Tag.BUTTON);
        item.classList.add(HTML_Class.ITEM);
        field.classList.add(HTML_Class.FIELD);
        field.textContent = text ? text : HTML_Tag.BUTTON;
        item.appendChild(field);
        this.__Item.push(item);
        this.__Field.push(field);
        this.__List.appendChild(item);
    }

    public removeItem(offset : number) : void {}

    public addComponent(itemOffset : number, element : HTMLElement) : void {}

    public removeComponent(itemOffset : number, element : HTMLElement) : void {}

    public defaultEvent() : void {}

    public getElementFromString (htmlString : string) : HTMLElement {

        let     parser  = new DOMParser();
        let     doc     = parser.parseFromString(htmlString, "text/html");
        return doc.body.firstElementChild as HTMLElement;
    }

}
