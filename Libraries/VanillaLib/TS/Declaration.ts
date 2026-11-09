export enum HTML_Tag {
    DIV             = "div",
    INPUT           = "input",
    A               = "a",
    FORM            = "form",
    P               = "p",
    UL              = "ul",
    LI              = "li",
    BUTTON          = "button"
}

export enum HTML_Class {
    LIST            = "list",
    ITEM            = "item",
    FIELD           = "field",
    ROW             = "row",
    COL             = "col",
    TREE            = "tree",
    WRAP            = "wrap",
    MENU            = "menu",
    SCROLL          = "scroll",
    ACTIVED         = "actived",
    OVERLAY         = "overlay",
    MODAL           = "modal",
    FILE            = "file",
    FOLDER          = "folder",
    SELECT          = "select",
    THEME_DARK      = "theme-dark",
    THEME_LIGHT     = "theme-light",
}

export enum Selector {
    FIELD_FOLDER        = ".field.folder",
    FIELD_FILE          = ".field.file",
    MENU_FIELD_DEPTH_0  = "[data-depth='0'] > .item > .field",
    MENU_FIELD_DEPTH_1  = "[data-depth='1'] > .item > .field",
    TEXTBOX_OVERLAY     = ":scope > .overlay",
    TEXTBOX_INPUT       = ":scope > .input",
    TEXTBOX_INPUT_MAIN  = ":scope > .input > .main",
    TEXTBOX_DATA        = ":scope > .data",

    MODAL_DIALOG        = ".modal .dialog",
    MODAL_OVERLAY       = ".modal > .overlay",
    MODAL_CLOSE         = ".header > .close",
    MODAL_ACTION_CANCEL = ".footer > .action.cancel",

    TOAST_ITEM          = ":scope > .list > .item",
    TOAST_CLOSE         = ":scope > .content > .close",
    TOAST_PROGRESS      = ":scope > .content > .progress",

    LIST            = ".list",
    ITEM            = ".item",
    FIELD           = ".field",
    ROW             = ".row",
    COL             = ".col",
    TREE            = ".tree",
    WRAP            = ".wrap",
    MENU            = ".menu",
    SCROLL          = ".scroll",
    ACTIVED         = ".actived",
    OVERLAY         = ".overlay",
    FILE            = ".file",
    FOLDER          = ".folder",
    SELECT          = ".select",
    TEXTBOX         = ".textbox",
    MODAL           = ".modal",
    TOAST           = ".toast",
    THEME_DARK      = ".theme-dark",
    THEME_LIGHT     = ".theme-light",
    DATA            = ".data",
    DATA_DEPTH_0    = "[data-depth='0']",
    DATA_DEPTH_1    = "[data-depth='1']",
    DATA_DEPTH_2    = "[data-depth='2']",
    SCOPE           = ":scope",
}

export enum HTML_Identify {
    VANILLA = "__vanilla__",
}

export enum Character {
    GREATER = ">",
    DOT = ".",
}

export enum Event {
    CLICK           = "click",
    MOUSEUP         = "mouseup",
    MOUSEDOWN       = "mousedown",
    MOUSEMOVE       = "mousemove",
    KEYDOWN         = "keydown",
    KEYUP           = "keyup",
    FOCUS           = "focus",
    CHANGE          = "change",
}
