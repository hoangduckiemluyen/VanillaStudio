
// menu
const array_Menu = document.querySelectorAll(".menu");
array_Menu.forEach((menu) => {

    // datadepth 0
    let array_Field_DataDepth_0 = menu.querySelectorAll("[data-depth='0'] > .item > .field");
    array_Field_DataDepth_0.forEach(fieldDatadepth_0 => {
        fieldDatadepth_0.addEventListener("focus", ()=>{
            array_Field_DataDepth_0.forEach(field => {
                field.classList.remove("actived");
            })
            fieldDatadepth_0.classList.add("actived");
        })
    })

    // datadepth 1
    let array_Field_DataDepth_1 = menu.querySelectorAll("[data-depth='1'] > .item > .field");
    array_Field_DataDepth_1.forEach(fieldDatadepth_1 => {
        fieldDatadepth_1.addEventListener("focus", ()=>{
            array_Field_DataDepth_0.forEach(field => {
                field.classList.remove("actived");
            })
        })
    })

    // overlay
    let overlay = menu.querySelector(".overlay");
    overlay.addEventListener("click", ()=>{
        array_Field_DataDepth_0.forEach(field => { field.classList.remove("actived"); });
        array_Field_DataDepth_1.forEach(field => { field.classList.remove("actived"); });
    })
})



// wrap field
const array_Wrap = document.querySelectorAll(".wrap");

array_Wrap.forEach(wrap => {
    let array_Field = wrap.querySelectorAll(':scope > .list > .item > .field');
    array_Field.forEach(field => {
        field.addEventListener("click", (event)=>{
            array_Field.forEach(field=>{
                field.classList.remove("actived");
            });
            field.classList.add("actived");
            event.preventDefault();
        });
    });
})

// row field
const array_Row = document.querySelectorAll(".row");

array_Row.forEach(row => {
    let array_Field = row.querySelectorAll(':scope > .list > .item > .field');
    array_Field.forEach(field => {
        field.addEventListener("click", (event)=>{
            array_Field.forEach(field=>{
                field.classList.remove("actived");
            });
            field.classList.add("actived");
            event.preventDefault();
        });
    });
})

// tree
const array_Tree = document.querySelectorAll(".tree");

array_Tree.forEach(tree => {
    let array_folder    = tree.querySelectorAll(".field.folder");
    let array_file      = tree.querySelectorAll(".field.file");

    array_folder.forEach(folder => {
        folder.addEventListener("click", ()=>{
            if(folder.classList.contains("actived")) folder.classList.remove("actived"); 
            else folder.classList.add("actived");
        });
    });

    array_file.forEach(file => {
        file.addEventListener("click", ()=>{
            array_file.forEach(file=>{
                file.classList.remove("actived");
            });
            file.classList.add("actived");
        });
    });
});


// select
const array_Select = document.querySelectorAll(".select");

array_Select.forEach(select => {

    let overlay         = select.querySelector(":scope > .overlay");
    let selected        = select.querySelector(":scope > .field");
    let data            = select.querySelector(":scope > .data");
    let array_Option    = select.querySelectorAll(":scope > .dropdown .field");

    overlay.addEventListener("click", ()=>{
        selected.classList.remove("actived");
    });

    selected.addEventListener("focus", (e)=>{
        if(selected.classList.contains("actived")) selected.classList.remove("actived");
        else selected.classList.add("actived");
        e.preventDefault();
    });

    selected.addEventListener("focus", ()=> { selected.classList.add("actived"); });
    selected.addEventListener("blur", ()=> { selected.classList.remove("actived"); });

    data.tabIndex = -1;

    array_Option.forEach(option => {
        option.tabIndex = -1;
        option.addEventListener("click", (e)=>{
            selected.textContent = option.textContent;
            selected.classList.remove("actived");
            data.value = option.value;
            e.preventDefault();
        });
    });
})


// textbox
const array_Textbox = document.querySelectorAll(".textbox");

array_Textbox.forEach(textbox => {
    let overlay     = textbox.querySelector(":scope > .overlay");
    let input       = textbox.querySelector(":scope > .input");
    let inputMain   = textbox.querySelector(":scope > .input > .main");
    let data        = textbox.querySelector(":scope .data");

    input.addEventListener("mousedown", (e)=>{
        e.preventDefault();
        inputMain.focus();
    });

    data.tabIndex = -1;
    inputMain.addEventListener("input", ()=>{ data.value = inputMain.textContent; });
    inputMain.addEventListener("focus", ()=>{ input.classList.add("actived"); });
    inputMain.addEventListener("blur",  ()=>{ input.classList.remove("actived"); });
});


// modal
const array_Modal = document.querySelectorAll(".modal");

array_Modal.forEach(modal => {
    let overlay         = modal.querySelector(":scope > .overlay");
    let closeButton     = modal.querySelector(":scope > .dialog > .header > .close");

    overlay.addEventListener("click", ()=> { modal.classList.remove("actived"); });
    closeButton.addEventListener("click", ()=> { modal.classList.remove("actived"); });
});

// toast

const object_Toast  = document.querySelector(".toast");
let object_List     = object_Toast.querySelector(":scope > .list");
let array_Item      = object_Toast.querySelectorAll(":scope > .list > .item");

array_Item.forEach(item => {
    let closeButton = item.querySelector(":scope > .content > .close");
    let progressBar = item.querySelector(":scope > .content > .progress");

    
    setTimeout(()=>{ progressBar.classList.add("actived"); }, 0);
    setTimeout(()=>{ item.remove() }, 5500);
    closeButton.addEventListener("click", ()=>{ item.remove(); });
});

// document.addEventListener("click", ()=> {
//     let item        = document.createElement("li");
//     let content     = document.createElement("div");
//     let status      = document.createElement("div");
//     let message     = document.createElement("div");
//     let closeButton = document.createElement("button");
//     let progress    = document.createElement("div");

//     item.classList.add("item");
//     content.classList.add("content");
//     content.classList.add("completed")
//     status.classList.add("status");
//     message.classList.add("message");
//     message.textContent = "ahihi"
//     progress.classList.add("progress");
//     closeButton.classList.add("close");
//     closeButton.textContent = "X";

//     item.appendChild(content);
//     content.appendChild(status);
//     content.appendChild(message);
//     content.appendChild(progress);
//     content.appendChild(closeButton);

//     object_List.appendChild(item);

//     setTimeout(()=>{ progress.classList.add("actived"); }, 0);
//     setTimeout(()=>{ item.remove() }, 5500);
// });