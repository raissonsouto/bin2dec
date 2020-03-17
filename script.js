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

    var aux = document.getElementById('input-textarea').value;
    document.getElementById('input-textarea').value = document.getElementById('output-textarea').value;
    document.getElementById('output-textarea').value = aux;

    inputInUseID = listOutputID[0];
    inputInUseValue = document.getElementById(listOutputID[0]).value;

    outputInUseID = listInputID[0];
    outputInUseValue = document.getElementById(listInputID[0]).value;q
}

function changeInputBase(putToBeUsed,putWidth) {
    
    if (outputInUseValue == document.getElementById(putToBeUsed).value) {

        switchBases();

    } else {

        var changeText = inputInUseValue;

        document.getElementById(inputInUseID+"-underline").style.width = '0px';
        document.getElementById(inputInUseID).style.fontWeight = 'normal';
        document.getElementById(inputInUseID).style.color = '#fff';

        document.getElementById(putToBeUsed+"-underline").style.width = putWidth;
        document.getElementById(putToBeUsed).style.fontWeight = 'bold';
        document.getElementById(putToBeUsed).style.color = 'rgb(67,150,233)';

        inputInUseID = putToBeUsed;
        inputInUseValue = document.getElementById(putToBeUsed).value;

        document.getElementById('input-textarea').value = parseInt(document.getElementById('input-textarea').value,changeText).toString(inputInUseValue);
    }
}

function changeOutputBase(putToBeUsed,putWidth) {
    
    if (inputInUseValue == document.getElementById(putToBeUsed).value) {

        switchBases();

    } else {

        var changeText = outputInUseValue;

        document.getElementById(outputInUseID+"-underline").style.width = '0px';
        document.getElementById(outputInUseID).style.fontWeight = 'normal';
        document.getElementById(outputInUseID).style.color = '#fff';

        document.getElementById(putToBeUsed+"-underline").style.width = putWidth;
        document.getElementById(putToBeUsed).style.fontWeight = 'bold';
        document.getElementById(putToBeUsed).style.color = 'rgb(67,150,233)';

        outputInUseID = putToBeUsed;
        outputInUseValue = document.getElementById(putToBeUsed).value;

        document.getElementById('output-textarea').value = parseInt(document.getElementById('output-textarea').value,changeText).toString(outputInUseValue);
    }
}

function translate (num) {

    if (num == "") {
        document.getElementById('output-textarea').value = "Number translated"

    } else {
        document.getElementById('output-textarea').value = parseInt(num,inputInUseValue).toString(outputInUseValue);
    }
    
}