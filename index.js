let num1 = 8
let num2 = 2

document.getElementById("Num1").textContent = num1
document.getElementById("Num2").textContent = num2
let finalSum = document.getElementById("deSum")
function add() {
      let totalSum = num1 + num2
      console.log(totalSum)
      finalSum.textContent = "sum: " + totalSum
}

function subtract() {
      let totalSubtract = num1 - num2
      console.log(totalSubtract)
      finalSum.textContent = "sum: " + totalSubtract
}

function divide() {
     let totalDivide = num1 / num2
     console.log(totalDivide)
     finalSum.textContent = "sum: " + totalDivide
}

function multiply() {
     let totalMultiply = num1 * num2
     console.log(totalMultiply)
     finalSum.textContent = "sum: " + totalMultiply
}