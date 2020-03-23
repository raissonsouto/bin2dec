//  input change

document.getElementById('binary-input-button').addEventListener("click", () => {changeInputBase('binary-input-button','53px')});
document.getElementById('decimal-input-button').addEventListener("click", () => {changeInputBase('decimal-input-button','53px')});
document.getElementById('hexadecimal-input-button').addEventListener('click', () => {changeInputBase('hexadecimal-input-button','93px')});
document.getElementById('octal-input-button').addEventListener("click", () => {changeInputBase('octal-input-button','43px')});

//  switch bases

document.getElementById('switch-bases-button').addEventListener('click', ()=> {switchBases()});

//  output change

document.getElementById('binary-output-button').addEventListener("click", () => {changeOutputBase('binary-output-button','53px')});
document.getElementById('decimal-output-button').addEventListener("click", () => {changeOutputBase('decimal-output-button','53px')});
document.getElementById('hexadecimal-output-button').addEventListener('click', () => {changeOutputBase('hexadecimal-output-button','93px')});
document.getElementById('octal-output-button').addEventListener("click", () => {changeOutputBase('octal-output-button','43px')});

//   translating

document.getElementById('input-textarea').addEventListener('input',() => {
    translate();
});

document.getElementById('erase-button').addEventListener('click',() => {
    erase();
});