//  variables
var inputInUseID = 'binary-input';
var outputInUseID = 'decimal-output';

var inputInUseValue = 2;
var outputInUseValue = 10;

function switchBases () {

    var listInputID = inputInUseID.split('-');
    var listOutputID = outputInUseID.split('-');

    listInputID[0] +='-output';
    listOutputID[0] +='-input';

    document.getElementById(inputInUseID+"-underline").style.width = '0px';
    document.getElementById(inputInUseID).style.fontWeight = 'normal';
    document.getElementById(inputInUseID).style.color = '#fff';

    document.getElementById(outputInUseID+"-underline").style.width = '0px';
    document.getElementById(outputInUseID).style.fontWeight = 'normal';
    document.getElementById(outputInUseID).style.color = '#fff';

    document.getElementById(listOutputID[0]+"-underline").style.width = '50px';
    document.getElementById(listOutputID[0]).style.fontWeight = 'bold';
    document.getElementById(listOutputID[0]).style.color = 'rgb(67,150,233)';

    document.getElementById(listInputID[0]+"-underline").style.width = '50px';
    document.getElementById(listInputID[0]).style.fontWeight = 'bold';
    document.getElementById(listInputID[0]).style.color = 'rgb(67,150,233)';

    inputInUseID = listOutputID[0];
    inputInUseValue = document.getElementById(listOutputID[0]).value;

    outputInUseID = listInputID[0];
    outputInUseValue = document.getElementById(listInputID[0]).value;q
}

function changeInputBase(putToBeUsed,putWidth) {
    
    if (outputInUseValue == document.getElementById(putToBeUsed).value) {

        switchBases();

    } else {

        document.getElementById(inputInUseID+"-underline").style.width = '0px';
        document.getElementById(inputInUseID).style.fontWeight = 'normal';
        document.getElementById(inputInUseID).style.color = '#fff';

        document.getElementById(putToBeUsed+"-underline").style.width = putWidth;
        document.getElementById(putToBeUsed).style.fontWeight = 'bold';
        document.getElementById(putToBeUsed).style.color = 'rgb(67,150,233)';

        inputInUseID = putToBeUsed;
        inputInUseValue = document.getElementById(putToBeUsed).value;
    }
}

function changeOutputBase(putToBeUsed,putWidth) {
    
    if (inputInUseValue == document.getElementById(putToBeUsed).value) {

        switchBases();

    } else {

        document.getElementById(outputInUseID+"-underline").style.width = '0px';
        document.getElementById(outputInUseID).style.fontWeight = 'normal';
        document.getElementById(outputInUseID).style.color = '#fff';

        document.getElementById(putToBeUsed+"-underline").style.width = putWidth;
        document.getElementById(putToBeUsed).style.fontWeight = 'bold';
        document.getElementById(putToBeUsed).style.color = 'rgb(67,150,233)';

        outputInUseID = putToBeUsed;
        outputInUseValue = document.getElementById(putToBeUsed).value;
    }
}

function translate (num,input,output) {

    document.getElementById('output-textarea').value = parseInt(num, input).toString(output);
    
}
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

document.getElementById('input-textarea').addEventListener('changed',translate(document.getElementById('input-textarea').value,inputInUseValue,outputInUseValue));