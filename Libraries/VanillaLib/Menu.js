const MAIN_TAG_NAME         = "div";
const LIST_TAG_NAME         = "ul";
const ITEM_TAG_NAME         = "li";
const FIELD_TAG_NAME        = "button";
const MAIN_CLASS_NAME       = "menu";
const LIST_CLASS_NAME       = "list";
const ITEM_CLASS_NAME       = "item";
const FIELD_CLASS_NAME      = "field";
const ACTIVED_CLASS_NAME    = "actived";

class Vanilla_Menu {

    static s_Number_FieldID      = 0;
    static s_Number_SubFieldID   = 0;

    __String_MainTagName        = MAIN_TAG_NAME;
    __String_ListTagName        = LIST_TAG_NAME;
    __String_ItemTagName        = ITEM_TAG_NAME;
    __String_FieldTagName       = FIELD_TAG_NAME;
    __String_MainClassName      = MAIN_CLASS_NAME;
    __String_ListClassName      = LIST_CLASS_NAME;
    __String_ItemClassName      = ITEM_CLASS_NAME;
    __String_FieldClassName     = FIELD_CLASS_NAME;
    __String_ActivedClassName   = ACTIVED_CLASS_NAME;
    
    __Object_Main               = null;
    __Object_List               = null;
    __Array_Item                = [];
    __Array_Field               = [];
    __Array_SubList             = []; 
    __Array_SubItem             = [[]];

    constructor (string_ExistHTMLID = "") {
        if(string_ExistHTMLID.length == 0) {
            this.createStructure();
            this.addItem("hello");
            this.addItem("hello");
            this.addItem("hello");
            this.addItem("hello");
            document.getElementById("__vanilla_studio__").appendChild(this.__Object_Main);

            let isActive = true;
            this.__Array_Field.forEach((field, index) => {
                field.addEventListener("click", (e)=> {
                    this.setFieldActive(isActive, index);
                });
            })
        }
    }

    createStructure() {

        this.__Object_Main = document.createElement(this.__String_MainTagName);
        this.__Object_List = document.createElement(this.__String_ListTagName);

        this.__Object_Main.classList.add(this.__String_MainClassName);
        this.__Object_List.classList.add(this.__String_ListClassName);

        this.__Object_Main.appendChild(this.__Object_List);
        
    }

    addItem(string_TextContent = "") {

        let objectItem = document.createElement(this.__String_ItemTagName);
        let objectField = document.createElement(this.__String_FieldTagName);

        objectItem.classList.add(this.__String_ItemClassName);
        objectField.classList.add(this.__String_FieldClassName);
        objectField.id          = this.generateFieldID();
        objectField.textContent = string_TextContent;
        objectItem.appendChild(objectField);

        this.__Object_List.appendChild(objectItem);
        this.__Array_Item.push(objectItem);
        this.__Array_Field.push(objectField);
    }

    setFieldActive(boolean_IsActived = false, number_Order = 0) {

        this.__Array_Field.forEach((field, index) => {

            field.classList.remove(this.__String_ActivedClassName);
            if(index == number_Order && boolean_IsActived) {
                field.classList.add(this.__String_ActivedClassName);
            }
        })
    } 

    addSubItem() {

    }
    
    getExistMenu() {

    }

    generateFieldID () { 
        return `__menu_field_${ Vanilla_Menu.s_Number_FieldHTMLID++ }__`; 
    }

    generateSubFieldID () { 
        return `__menu_field_${ Vanilla_Menu.s_Number_SubFieldID++ }__`; 
    }
}

let menu = new Vanilla_Menu();