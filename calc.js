let displayBox = document.getElementById("display-box")


const displayClick = (itself) => {

    if (displayBox.innerText == "0") {
        displayBox.innerText = ""
    }

    if (displayBox.innerText.length >= 13) {
        return
    }

    // if diplay box ends with +, -,  ×, or ÷
    let displayText = displayBox.innerText
    if (displayText.endsWith("+") || displayText.endsWith("-") || displayText.endsWith("×") || displayText.endsWith("÷")) {

        // if the pressed button is a number
        if (itself.innerText != "+" && itself.innerText != "-" && itself.innerText != "×" && itself.innerText != "÷") {

        } else {
            // if the display box ends with +, -,  ×, or ÷ then replace the last character with pressed button
            displayBox.innerText = displayText.slice(0, -1) + itself.innerText
            return
        }

    }
    displayBox.innerText += itself.innerText

}

const displayClear = () => {
    displayBox.innerText = 0
}

const displayResult = () => {

    let string = displayBox.innerText
    string = string.replace(/×/g, '*')
    string = string.replace(/÷/g, '/')

    let result = eval(string).toPrecision();
    result = result.slice(0, 13)
    displayBox.innerText = String(result)
}

var str1 = "2+";
var str2 = str1.slice(0, -1) + '-';
console.log(str2);