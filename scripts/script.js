//  variables
var inputInUseID = 'binary-input-button';
var outputInUseID = 'decimal-output-button';

var inputInUseValue = 2;
var outputInUseValue = 10;

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

function changeInputBase(putToBeUsed,putWidth) {
    
    if (outputInUseValue == document.getElementById(putToBeUsed).value) {

        switchBases();

    } else {

        document.getElementById(inputInUseID).className = "";

        document.getElementById(putToBeUsed).className = "base-xput-button";

        inputInUseID = putToBeUsed;
        inputInUseValue = document.getElementById(putToBeUsed).value;
    }
}

function changeOutputBase(putToBeUsed,putWidth) {
    
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

    if (num == "") {
        document.getElementById('output-textarea').innerHTML = "Number translated";

    } else {
        document.getElementById('output-textarea').innerHTML = parseInt(num,inputInUseValue).toString(outputInUseValue);
    }
    
}

function erase () {
    document.getElementById('input-textarea').value = '';
}