//  input change

document.getElementById('binary-input-button').addEventListener("click", () => {changeInputBase('binary-input-button')});
document.getElementById('decimal-input-button').addEventListener("click", () => {changeInputBase('decimal-input-button')});
document.getElementById('hexadecimal-input-button').addEventListener('click', () => {changeInputBase('hexadecimal-input-button')});
document.getElementById('octal-input-button').addEventListener("click", () => {changeInputBase('octal-input-button')});

//  switch bases

document.getElementById('switch-bases-button').addEventListener('click', ()=> {switchBases()});

//  output change

document.getElementById('binary-output-button').addEventListener("click", () => {changeOutputBase('binary-output-button')});
document.getElementById('decimal-output-button').addEventListener("click", () => {changeOutputBase('decimal-output-button','53px')});
document.getElementById('hexadecimal-output-button').addEventListener('click', () => {changeOutputBase('hexadecimal-output-button')});
document.getElementById('octal-output-button').addEventListener("click", () => {changeOutputBase('octal-output-button')});

//   translating

document.getElementById('input-textarea').addEventListener('input',() => {
    translate();
});

document.getElementById('erase-button').addEventListener('click',() => {
    erase();
});


window.addEventListener('resize', () => {
    if(window.innerWidth < 720) {
    }
})