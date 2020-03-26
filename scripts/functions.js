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
    
    if (window.innerWidth < 721) {

        document.getElementById(inputInUseID).style.display = 'none';
        document.getElementById(inputInUseID).className = "";
        document.getElementById(outputInUseID).style.display = 'none';
        document.getElementById(outputInUseID).className = "";

        var listInputID = outputInUseID.split('-');
        var listOutputID = inputInUseID.split('-');
    
        inputInUseID = listInputID[0] + '-input-button';
        outputInUseID = listOutputID[0] + '-output-button';

        var aux = inputInUseValue;
        inputInUseValue = outputInUseValue;
        outputInUseValue = aux;

        document.getElementById(inputInUseID).style.display = 'inline-flex';
        document.getElementById(inputInUseID).className = "base-xput-button";
        document.getElementById(outputInUseID).style.display = 'inline-flex';
        document.getElementById(outputInUseID).className = "base-xput-button";

    } else {

        if (document.getElementById('output-textarea').innerHTML == "Ops ... maybe you typed something wrong") {
            erase();
        
        }
    
        var auxd = inputInUseValue;
        inputInUseValue = outputInUseValue;
        outputInUseValue = auxd;
    
        var aux = document.getElementById('input-textarea').value;
        document.getElementById('input-textarea').value = document.getElementById('output-textarea').innerHTML;
        document.getElementById('output-textarea').innerHTML = aux;
    
        changeInputBase(listInputID[0]);
        changeOutputBase(listOutputID[0]);
    }

}

function chooseInputBase(id) {

    if (document.getElementById(id).value == outputInUseValue) {
       switchBases();
    }

    else {
        if (id == 2) {

            document.getElementById(inputInUseID).style.display = 'none';
            document.getElementById(inputInUseID).className = "";
            inputInUseID = 'binary-input-button';
            inputInUseValue = 2;
            document.getElementById(inputInUseID).style.display = 'inline-flex';
            document.getElementById(inputInUseID).className = "base-xput-button";
    
        } else if (id == 10) {
    
            document.getElementById(inputInUseID).style.display = 'none';
            document.getElementById(inputInUseID).className = "";
            inputInUseID = 'decimal-input-button';
            inputInUseValue = 10;
            document.getElementById(inputInUseID).style.display = 'inline-flex';
            document.getElementById(inputInUseID).className = "base-xput-button";
    
        } else if (id == 16) {
    
            document.getElementById(inputInUseID).style.display = 'none';
            document.getElementById(inputInUseID).className = "";
            inputInUseID = 'hexadecimal-input-button';
            inputInUseValue = 16;
            document.getElementById(inputInUseID).style.display = 'inline-flex';
            document.getElementById(inputInUseID).className = "base-xput-button";
    
        } else if (id == 8) {
    
            document.getElementById(inputInUseID).style.display = 'none';
            document.getElementById(inputInUseID).className = "";
            inputInUseID = 'octal-input-button';
            inputInUseValue = 8;
            document.getElementById(inputInUseID).style.display = 'inline-flex';
            document.getElementById(inputInUseID).className = "base-xput-button";
    
        }
    }

    document.getElementById('choose-put').style.display = "none";
}

function chooseOutputBase(id) {

    if (document.getElementById().value == inputInUseValue) {
        switchBases();
    }

    else {
        if (id == "choose-bin") {

            document.getElementById(outputInUseID).style.display = 'none';
            document.getElementById(outputInUseID).className = "";
            outputInUseID = 'binary-output-button';
            outputInUseValue = 2;
            document.getElementById(outputInUseID).style.display = 'inline-flex';
            document.getElementById(outputInUseID).className = "base-xput-button";
    
        } else if (id == "choose-dec") {
    
            document.getElementById(outputInUseID).style.display = 'none';
            document.getElementById(outputInUseID).className = "";
            outputInUseID = 'decimal-output-button';
            outputInUseValue = 10;
            document.getElementById(outputInUseID).style.display = 'inline-flex';
            document.getElementById(outputInUseID).className = "base-xput-button";
    
        } else if (id == "choose-hex") {
    
            document.getElementById(outputInUseID).style.display = 'none';
            document.getElementById(outputInUseID).className = "";
            outputInUseID = 'hexadecimal-output-button';
            outputInUseValue = 16;
            document.getElementById(outputInUseID).style.display = 'inline-flex';
            document.getElementById(outputInUseID).className = "base-xput-button";
    
        } else if (id == "choose-oct") {
    
            document.getElementById(outputInUseID).style.display = 'none';
            document.getElementById(outputInUseID).className = "";
            outputInUseID = 'octal-output-button';
            outputInUseValue = 8;
            document.getElementById(outputInUseID).style.display = 'inline-flex';
            document.getElementById(outputInUseID).className = "base-xput-button";
    
        }
    }

    document.getElementById('choose-put').style.display = "none";
}

function changeInputBase(putToBeUsed) {

    if (window.innerWidth < 721) {

        document.getElementById('choose-put').style.display = "block";

    } else {

        if (outputInUseValue == document.getElementById(putToBeUsed).value) {

            switchBases();
    
        } else {
    
            document.getElementById(inputInUseID).className = "";
    
            document.getElementById(putToBeUsed).className = "base-xput-button";
    
            inputInUseID = putToBeUsed;
            inputInUseValue = document.getElementById(putToBeUsed).value;
        }
    }
}

function changeOutputBase(putToBeUsed) {
    
    if (inputInUseValue == document.getElementById(putToBeUsed).value) {

        switchBases();

    } else if (window.innerWidth < 721 && putToBeUsed == inputInUseID) {
        
        document.getElementById('choose-put').style.display = "block";

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
    document.getElementById('output-textarea').innerHTML = "";
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
            document.getElementById('output-textarea').innerHTML = parseInt(num,inputInUseValue).toString(outputInUseValue).toUpperCase();
        }
    }
}

function resize() {
    if (window.innerWidth < 720) {
        
        document.getElementById('placeholder-output-textarea').innerHTML = "Translation";
        document.getElementById('iput-textarea').placeholder = "Number";
    } else {
        
        if(window.innerWidth < 1200) {

            document.getElementById('binary-input').innerHTML = "bin";
            document.getElementById('decimal-input').innerHTML = "dec";
            document.getElementById('hexadecimal-input').innerHTML = "hex";
            document.getElementById('octal-input').innerHTML = "oct";
    
            document.getElementById('binary-output').innerHTML = "bin";
            document.getElementById('decimal-output').innerHTML = "dec";
            document.getElementById('hexadecimal-output').innerHTML = "hex";
            document.getElementById('octal-output').innerHTML = "oct";
    
            document.getElementById('binary-input-button').style.width = "30px";
            document.getElementById('decimal-input-button').style.width = "30px";
            document.getElementById('hexadecimal-input-button').style.width = "30px";
            document.getElementById('octal-input-button').style.width = "30px";
    
            document.getElementById('binary-output-button').style.width = "30px";
            document.getElementById('decimal-output-button').style.width = "30px";
            document.getElementById('hexadecimal-output-button').style.width = "30px";
            document.getElementById('octal-output-button').style.width = "30px";
        } else {
    
            document.getElementById('binary-input').innerHTML = "binary";
            document.getElementById('decimal-input').innerHTML = "decimal";
            document.getElementById('hexadecimal-input').innerHTML = "hexadecimal";
            document.getElementById('octal-input').innerHTML = "octal";
    
            document.getElementById('binary-output').innerHTML = "binary";
            document.getElementById('decimal-output').innerHTML = "decimal";
            document.getElementById('hexadecimal-output').innerHTML = "hexadecimal";
            document.getElementById('octal-output').innerHTML = "octal";
    
            document.getElementById('binary-input-button').style.width = "44px";
            document.getElementById('decimal-input-button').style.width = "57px";
            document.getElementById('hexadecimal-input-button').style.width = "91px";
            document.getElementById('octal-input-button').style.width = "36px";
    
            document.getElementById('binary-output-button').style.width = "44px";
            document.getElementById('decimal-output-button').style.width = "57px";
            document.getElementById('hexadecimal-output-button').style.width = "91px";
            document.getElementById('octal-output-button').style.width = "36px";
    
        }
    }
}