import * as Decl from "./Declaration";

const MENU      : NodeListOf<Element>   = document.querySelectorAll (Decl.Selector.MENU);
const TREE      : NodeListOf<Element>   = document.querySelectorAll (Decl.Selector.TREE);
const SELECT    : NodeListOf<Element>   = document.querySelectorAll (Decl.Selector.SELECT);
const TEXTBOX   : NodeListOf<Element>   = document.querySelectorAll (Decl.Selector.TEXTBOX);
const MODAL     : HTMLDivElement        = document.querySelector    (Decl.Selector.MODAL) as HTMLDivElement;
const TOAST     : HTMLDivElement        = document.querySelector    (Decl.Selector.TOAST) as HTMLDivElement;

let g_ModalDialogs    : NodeListOf<Element>   = MODAL.querySelectorAll(Decl.Selector.MODAL_DIALOG);
let g_ModalOverlay    : HTMLDivElement        = MODAL.querySelector(Decl.Selector.MODAL_OVERLAY) as HTMLDivElement;
let g_ToastItems : NodeListOf<Element> = TOAST.querySelectorAll(Decl.Selector.TOAST_ITEM);

// ----- Menu ---------------------------------------------------------------------------------------------------------------
MENU.forEach((menu) => {

    // datadepth 0
    console.log(Decl.Selector.MENU_FIELD_DEPTH_0)
    let fieldDepth_0 : NodeListOf<Element> = menu.querySelectorAll(Decl.Selector.MENU_FIELD_DEPTH_0);
    fieldDepth_0.forEach(fieldDatadepth_0 => {
        fieldDatadepth_0.addEventListener(Decl.Event.FOCUS, ()=>{
            fieldDepth_0.forEach(field => {
                field.classList.remove(Decl.HTML_Class.ACTIVED);
            })
            fieldDatadepth_0.classList.add(Decl.HTML_Class.ACTIVED);
        })
    });

    // datadepth 1
    let fieldDepth_1 : NodeListOf<Element> = menu.querySelectorAll(Decl.Selector.MENU_FIELD_DEPTH_1);
    fieldDepth_1.forEach(fieldDatadepth_1 => {
        fieldDatadepth_1.addEventListener(Decl.Event.FOCUS, ()=>{
            fieldDepth_0.forEach(field => {
                field.classList.remove(Decl.HTML_Class.ACTIVED);
            })
        })
    });

    // overlay
    let overlay : HTMLDivElement = menu.querySelector(Decl.Selector.OVERLAY) as HTMLDivElement;
    overlay.addEventListener(Decl.Event.CLICK, ()=>{
        fieldDepth_0.forEach(field => { field.classList.remove(Decl.HTML_Class.ACTIVED); });
        fieldDepth_1.forEach(field => { field.classList.remove(Decl.HTML_Class.ACTIVED); });
    });
})


// ----- Tree ---------------------------------------------------------------------------------------------------------------
TREE.forEach(tree => {

    let fieldFolder    : NodeListOf<HTMLButtonElement> = tree.querySelectorAll(Decl.Selector.FIELD_FOLDER);
    let fieldFile      : NodeListOf<HTMLButtonElement> = tree.querySelectorAll(Decl.Selector.FIELD_FILE);

    fieldFolder.forEach(folder => {
        folder.addEventListener(Decl.Event.CLICK, ()=>{
            if(folder.classList.contains(Decl.HTML_Class.ACTIVED)) folder.classList.remove(Decl.HTML_Class.ACTIVED); 
            else folder.classList.add(Decl.HTML_Class.ACTIVED);
        });
    });

    fieldFile.forEach(file => {
        file.addEventListener(Decl.Event.CLICK, ()=>{
            fieldFile.forEach(file=>{
                file.classList.remove(Decl.HTML_Class.ACTIVED);
            });
            file.classList.add(Decl.HTML_Class.ACTIVED);
        });
    });
});


// ----- Select ---------------------------------------------------------------------------------------------------------------
SELECT.forEach(select => {

    let overlay     : HTMLDivElement                = select.querySelector(Decl.Selector.TEXTBOX_OVERLAY) as HTMLDivElement;
    let selected    : HTMLButtonElement             = select.querySelector(":scope > .field")   as HTMLButtonElement;
    let data        : HTMLInputElement              = select.querySelector(":scope > .data")    as HTMLInputElement;
    let option      : NodeListOf<HTMLButtonElement> = select.querySelectorAll(":scope > .dropdown .field");

    overlay.addEventListener(Decl.Event.CLICK, ()=>{
        selected.classList.remove(Decl.HTML_Class.ACTIVED);
    });

    selected.addEventListener(Decl.Event.FOCUS, (e)=>{
        if(selected.classList.contains(Decl.HTML_Class.ACTIVED)) selected.classList.remove(Decl.HTML_Class.ACTIVED);
        else selected.classList.add(Decl.HTML_Class.ACTIVED);
        e.preventDefault();
    });

    selected.addEventListener(Decl.Event.FOCUS, ()=> { selected.classList.add(Decl.HTML_Class.ACTIVED); });
    selected.addEventListener("blur", ()=> { selected.classList.remove(Decl.HTML_Class.ACTIVED); });

    option.forEach(option => {
        option.addEventListener(Decl.Event.CLICK, (e)=>{
            selected.textContent = option.textContent;
            selected.classList.remove(Decl.HTML_Class.ACTIVED);
            data.value = option.value;
            e.preventDefault();
        });
    });
})


// ----- Textbox ---------------------------------------------------------------------------------------------------------------
TEXTBOX.forEach(textbox => {
    let overlay     : HTMLDivElement    = textbox.querySelector(Decl.Selector.TEXTBOX_OVERLAY)       as HTMLDivElement;
    let input       : HTMLDivElement    = textbox.querySelector(Decl.Selector.TEXTBOX_INPUT)         as HTMLDivElement;
    let inputMain   : HTMLInputElement  = textbox.querySelector(Decl.Selector.TEXTBOX_INPUT_MAIN)    as HTMLInputElement;
    let data        : HTMLInputElement  = textbox.querySelector(Decl.Selector.TEXTBOX_DATA)          as HTMLInputElement;

    input.addEventListener("mousedown", (e)=>{
        e.preventDefault();
        inputMain.focus();
    });

    data.tabIndex = -1;
    inputMain.addEventListener("input", ()=>{ data.value = inputMain.textContent; });
    inputMain.addEventListener("focus", ()=>{ input.classList.add("actived"); });
    inputMain.addEventListener("blur",  ()=>{ input.classList.remove("actived"); });
});


// ----- Modal ---------------------------------------------------------------------------------------------------------------

g_ModalDialogs.forEach(dialog => {
    let closeButton     : HTMLButtonElement = dialog.querySelector(Decl.Selector.MODAL_CLOSE)           as HTMLButtonElement;
    let cancelButton    : HTMLButtonElement = dialog.querySelector(Decl.Selector.MODAL_ACTION_CANCEL)   as HTMLButtonElement;

    g_ModalOverlay.addEventListener("click", ()=> { dialog.classList.remove("actived"); });
    closeButton.addEventListener("click", ()=> { dialog.classList.remove("actived"); });
    cancelButton.addEventListener("click", ()=> { dialog.classList.remove("actived"); });
});


// ----- Toast ---------------------------------------------------------------------------------------------------------------

g_ToastItems.forEach(item => {
    let closeButton : HTMLButtonElement = item.querySelector(Decl.Selector.TOAST_CLOSE)      as HTMLButtonElement;
    let progressBar : HTMLDivElement    = item.querySelector(Decl.Selector.TOAST_PROGRESS)   as HTMLDivElement;

    
    setTimeout(()=>{ progressBar.classList.add("actived"); }, 0);
    setTimeout(()=>{ item.remove() }, 5500);
    closeButton.addEventListener("click", ()=>{ item.remove(); });
});