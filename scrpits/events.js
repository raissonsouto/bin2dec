//  input change

document.getElementById('binary-input').addEventListener("click", () => {changeInputBase('binary-input','53px')});
document.getElementById('decimal-input').addEventListener("click", () => {changeInputBase('decimal-input','53px')});
document.getElementById('hexadecimal-input').addEventListener('click', () => {changeInputBase('hexadecimal-input','93px')});
document.getElementById('octal-input').addEventListener("click", () => {changeInputBase('octal-input','43px')});

//  switch bases

document.getElementById('switch-button').addEventListener('click', ()=> {switchBases()});

//  output change

document.getElementById('binary-output').addEventListener("click", () => {changeOutputBase('binary-output','53px')});
document.getElementById('decimal-output').addEventListener("click", () => {changeOutputBase('decimal-output','53px')});
document.getElementById('hexadecimal-output').addEventListener('click', () => {changeOutputBase('hexadecimal-output','93px')});
document.getElementById('octal-output').addEventListener("click", () => {changeOutputBase('octal-output','43px')});

//   translating

document.getElementById('input-textarea').addEventListener('input',() => {
    translate(document.getElementById('input-textarea').value);
});