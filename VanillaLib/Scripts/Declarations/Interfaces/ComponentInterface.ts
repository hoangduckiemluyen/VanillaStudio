/**
 * @file Component.ts
 * @description This is Component class, using for inheritance.
 * @author Hoang Duc Kiem Luyen
 * @created 2026-11-25
 */ 

import { ComponentDepth } from "./__Include__"; 

export interface ComponentInterface {


    /**
     * Set container for component
     * @param container The exist element contain component element
     */
    setContainer(container: HTMLElement) : void ;

    /**
     * Create component structure and append to container
     */
    create() : void;

    /**
     * Update component from exists HTML element
     * @param element exists element
     */
    update(element : HTMLElement) : void;

    /**
     * Return component HTML element
     * @returns Component HTML element
     */
    read() : HTMLElement;
    
    /**
     * delete component
     */
    delete() : void;


    /**
     * Add class name to component, list, item and field
     * @param elementDepth element depth
     * @param className array HTML class name
     * @param offset item & field offset in array
     */
    addClassName(elementDepth : ComponentDepth, className : string[], offset : number) : void;

    /**
     * Remove class name from component, list, item and field
     * @param elementDepth element depth
     * @param className array HTML class name
     * @param offset item & field offset in array
     */
    removeClassName(elementDepth : ComponentDepth, className : string[], offset : number) : void;

    /**
     * Check contain class name in component, list, item and field
     * @param elementDepth element depth
     * @param className array HTML class name
     * @param offset item & field offset in array
     * @returns return true if element contain class name
     */
    containClassName(elementDepth : ComponentDepth, className : string, offset : number) : boolean;
    
    /**
     * Add item to component
     * @param text Text content for field button
     */
    addItem(text? : string) : void;
    
    /**
     * remove item from component
     * @param offset item offset in array
     */
    removeItem(offset : number) : void;

    /**
     * Add exist component to item
     * @param itemOffset item offset in array
     * @param element component
     */
    addComponent(itemOffset : number, element : HTMLElement) : void;

    /**
     * remove component from item
     * @param itemOffset item offset in array
     * @param element component
     */
    removeComponent(itemOffset : number, element : HTMLElement) : void;

    /**
     * Default event white HTML file running
     */
    defaultEvent() : void;

    /**
     * [Protected] get element from string
     * @param htmlString htmlString
     * @returns HTMLElement parsed from string
     */
    getElementFromString (htmlString : string) : HTMLElement;
}