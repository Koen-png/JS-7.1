function calculate(){
    let a = parseFloat(prompt("vul uw budget in"));
    let b = parseFloat(prompt("vul de kosten in"));
    if (a < b){
        alert ("Helaas, te weinig geldt (<- misspelling on the site)")
    } else {
        alert("U heeft genoeg geld!")
    };
}

//this is just nicer than making a lot of files

let clickercount = 0;
function clicker(){
    clickercount ++;
    let thingamajig = document.getElementById("clicker");
    thingamajig.textContent = "clicker count: " + clickercount;
    if (clickercount > 10){
        clickercount = 0;
    }
}

let answer;
function AddNumber(){
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    answer = document.getElementById('answerCalc');
    answer.textContent = a + b;
    return false;
}

function SubNumber(){
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    answer = document.getElementById('answerCalc');
    answer.textContent = a - b;
    return false;
}

function MultNumber(){
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    answer = document.getElementById('answerCalc');
    answer.textContent = a * b;
    return false;
}

function DivNumber(){
    let a = parseFloat(document.getElementById("number1").value);
    let b = parseFloat(document.getElementById("number2").value);
    answer = document.getElementById('answerCalc');
    answer.textContent = a / b;
    return false;
}