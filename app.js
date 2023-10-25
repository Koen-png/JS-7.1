function calculate(){
    let a = parseFloat(prompt("vul uw budget in"));
    let b = parseFloat(prompt("vul de kosten in"));
    if (a < b){
        alert ("Helaas, te weinig geldt (<- misspelling on the site)")
    } else {
        alert("U heeft genoeg geld!")
    };
}