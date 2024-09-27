var inputValue = document.getElementById('input');
var lastinputValue = '';


function getButton(num) {
    var inputValue = document.getElementById('input');
    inputValue.value += num.innerText;
    return inputValue.value

}

function getOperator(value) {
    var inputValue = document.getElementById('input');
    var lastinputValue = '';

    if (['+', '-', '*', '/', '.', '%'].includes(value)) {
        if (['+', '-', '*', '/', '.', '%'].includes(lastinputValue)) {
        }
    }

    inputValue.value += value.innerText;
    lastinputValue = value.innerText;
    // lastinputValue = inputValue.value

    if (lastinputValue == value.innerText) {

        inputValue.value = lastinputValue.slice(0, lastinputValue.length - 1) +value.innerText;

        alert('if chl gya')
    }
    else {
        inputValue.value += value.innerText;
        alert('pehla chl gya')
    }


}

// function clearBtn(){
//     inputValue.value = '';
//     lastinputValue = '';
// }

function getResult() {
    var inputValue = document.getElementById('input')
    inputValue.value = eval(inputValue.value)
}

function clearBtn() {
    var inputValue = document.getElementById('input')
    inputValue.value = ""
}

function deleteBtn() {
    var inputValue = document.getElementById('input')
    var string = inputValue.value
    inputValue.value = string.substring(0, string.length - 1)
}