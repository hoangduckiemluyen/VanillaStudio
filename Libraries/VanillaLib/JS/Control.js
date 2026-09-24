// select box

function selectBoxProcess(objSelect) {
let objSelectFace = objSelect.querySelector('.face');
let objSelectInput = objSelect.querySelector('input');
let objSelectItem = objSelect.querySelectorAll('.item');
let objSelectItems = objSelect.querySelector('.items');

let opened = false;

objSelectItem.forEach(item => { 
    item.addEventListener('click', ()=>{
        opened = false;
        objSelectInput.value = item.value;
        objSelectItems.classList.remove('opened');
        objSelectFace.textContent = item.textContent;
    });
});

objSelectFace.addEventListener('click', ()=>{
    if(!opened) {
        objSelectItems.classList.add('opened');
        opened = true;
    } else {
        objSelectItems.classList.remove('opened');
        opened = false;
    }
});
}


let arraySelect = document.querySelectorAll('.select');
arraySelect.forEach(select => { selectBoxProcess(select); });

// color picker
let arrayColorPicker         = document.querySelectorAll('.colorpicker');

arrayColorPicker.forEach(colorPicker => {
    let colorPickerInput = colorPicker.querySelector('input');
    colorPicker.style.backgroundColor = colorPickerInput.value;
    colorPickerInput.addEventListener('input', (event)=> {
        colorPicker.style.backgroundColor = event.target.value;
    });
    colorPickerInput.addEventListener('change', (event)=> {
    });
});

// file 
let arrayFiles = document.querySelectorAll('.file');

arrayFiles.forEach(file => {
    let fileInput = file.querySelector('input');
    file.innerHTML += "<p>Choose File</p>";
    fileInput.addEventListener('change', (e) => {
        file.innerText = fileInput.value;
        console.log(fileInput.value);
    });
});