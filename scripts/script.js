//  variables
var inputInUseID = 'binary-input-button';
var outputInUseID = 'decimal-output-button';

var inputInUseValue = 2;
var outputInUseValue = 10;

var binDomain = ['0','1'];
var decDomain = ['0','1','2','3','4','5','6','7','8','9'];
var hexDomain = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
var ocDomain = ['0','1','2','3','4','5','6','7'];


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

        translate();
    }
}

function erase () {
    document.getElementById('input-textarea').value = '';
    document.getElementById('erase-button').style.display = "none";
    document.getElementById('placeholder-output-textarea').innerHTML = "Translation";
    document.getElementById('output-textarea').style.display = "none";
    document.getElementById('input-textarea').placeholder = "Number";

}

function checkInput (input) {

    var domain;

    if (inputInUseValue == 2) {domain = binDomain}
    else if (inputInUseValue == 10) {domain = decDomain}
    else if (inputInUseValue == 16) {domain = hexDomain}
    else if (inputInUseValue == 8) {domain = ocDomain}

    var retorno = true;

    for (var runInput = 0; runInput < input.length; runInput++) {

        for (var runDomain = 0; runDomain < domain.length; runDomain++) {

            if (input[runInput] == domain[runDomain]) {

                retorno = true;
                break;
            }
            retorno = false;
        }

        if (retorno == false) {
            return false;
        }
    }
    return true;
}

function translate() {

    var num = document.getElementById('input-textarea').value;
    
    if (num == "") {

        document.getElementById('erase-button').style.display = "none";
        document.getElementById('placeholder-output-textarea').innerHTML = "Translation";
        document.getElementById('output-textarea').style.display = "none";
        document.getElementById('input-textarea').placeholder = "Number";
        
    } else {

        document.getElementById('erase-button').style.display= "block";
        document.getElementById('placeholder-output-textarea').innerHTML = "";
        document.getElementById('output-textarea').style.display = "block";

        if (!checkInput(num)) {
            document.getElementById('output-textarea').innerHTML = "Ops ... maybe you typed something wrong";
        } else {
            document.getElementById('output-textarea').innerHTML = parseInt(num,inputInUseValue).toString(outputInUseValue);
        }
    }
}