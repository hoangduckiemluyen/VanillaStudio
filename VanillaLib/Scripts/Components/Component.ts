/**
 * @file Component.ts
 * @description This is Component class, using for inheritance.
 * @author Hoang Duc Kiem Luyen
 * @created 2026-11-25
 */

import {ComponentDepth, HTML_Class, HTML_Tag, IComponent} from "./__Include__";


export default class Component implements IComponent {
    
    
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
        this.__Main.classList.add(HTML_Class.COMPONENT);

        this.__List.classList.add(HTML_Class.LIST);
        this.__Main.appendChild(this.__List);
        this.__Container.appendChild(this.__Main);
    }

    public set(element : HTMLElement): void {
            this.__Main = element; 
            let nodeList = this.__Main.querySelectorAll(':scope > .list > .item > .field') as NodeListOf<HTMLElement>;
            nodeList.forEach((e, i) => {
                this.__Field[i] = e;
            })
            console.log(this.__Field);
        
    }

    public get() : HTMLElement { return this.__Main;  }
    
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
