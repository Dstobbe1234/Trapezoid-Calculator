// Area of Trapezoid Calculator

//Event Listener
document.getElementById("calc").addEventListener("click", calc);
//Function
function calc() {
    //Input
    let sideA = +document.getElementById("a").value;
    let sideB = +document.getElementById("b").value;
    let height = +document.getElementById("h").value;

    //Process
    let area = 0.5 * (sideA + sideB) * height;
    //Output
    document.getElementById("area").innerHTML = area;
}