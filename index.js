function level_10() {
    document.getElementById("l10").innerHTML = "Hello, world!";
}


function level_11() {

let x = document.getElementById("l11");
if (x.style.backgroundColor === "yellow") {
    x.style.backgroundColor = "inherit";
} else {
    x.style.backgroundColor = "yellow";
}
}
function level_13() {
    let num = document.getElementById("l13_input").value;
    let output = ""

    for (let index = 0; index <= num; index++) {
        output += "*".repeat(index) + "<br>";
        
    }
    document.getElementById("l13_output").innerHTML = output;  
}