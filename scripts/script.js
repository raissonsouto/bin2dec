//  variables
var inputInUseID = 'binary-input-button';
var outputInUseID = 'decimal-output-button';

var inputInUseValue = 2;
var outputInUseValue = 10;

var binDomain = ['0','1'];
var decDomain = ['0','1','2','3','4','5','6','7','8','9'];
var hexnDomain = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
var ocDomain = ['0','1','2','3','4','5','6','7'];

function contains(value, domain){
    for (var i in domain){
        if (value == i){
            return true;
        }
    }
    return false;
}

function checkInput (input,domain) {
    for (var i in input.toString) {
        if (!contains(i, domain)){
            return false;
        }
    }
    return true;
}

function switchBases () {

    var listInputID = outputInUseID.split('-');
    var listOutputID = inputInUseID.split('-');

    listInputID[0] +='-input-button';
    listOutputID[0] +='-output-button';

    document.getElementById(inputInUseID).className = "";
    document.getElementById(outputInUseID).className = "";

    document.getElementById(listInputID[0]).className = "base-xput-button";
    document.getElementById(listOutputID[0]).className = "base-xput-button";

    var aux = document.getElementById('input-textarea').value;
    document.getElementById('input-textarea').value = document.getElementById('output-textarea').innerHTML;
    document.getElementById('output-textarea').innerHTML = aux;

    inputInUseID = listInputID[0];
    inputInUseValue = document.getElementById(listInputID[0]).value;

    outputInUseID = listOutputID[0];
    outputInUseValue = document.getElementById(listOutputID[0]).value;
}

function changeInputBase(putToBeUsed) {
    
    if (outputInUseValue == document.getElementById(putToBeUsed).value) {

        switchBases();

    } else {

        document.getElementById(inputInUseID).className = "";

        document.getElementById(putToBeUsed).className = "base-xput-button";

        inputInUseID = putToBeUsed;
        inputInUseValue = document.getElementById(putToBeUsed).value;
    }
}

function changeOutputBase(putToBeUsed) {
    
    if (inputInUseValue == document.getElementById(putToBeUsed).value) {

        switchBases();

    } else {

        var changeText = outputInUseValue;

        document.getElementById(outputInUseID).className = "";

        document.getElementById(putToBeUsed).className = "base-xput-button";

        outputInUseID = putToBeUsed;
        outputInUseValue = document.getElementById(putToBeUsed).value;

        document.getElementById('output-textarea').value = parseInt(document.getElementById('output-textarea').value,changeText).toString(outputInUseValue);
    }
}

function translate (num) {
    if (checkInput(num, binDomain)){
        if (num == "") {
            document.getElementById('output-textarea').innerHTML = "Number translated";
    
        } else {
            document.getElementById('output-textarea').innerHTML = parseInt(num,inputInUseValue).toString(outputInUseValue);
        }   
    }
    
}

function erase () {
    document.getElementById('input-textarea').value = '';
    document.getElementById('output-textarea').innerHTML = '';
}