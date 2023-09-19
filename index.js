let plus = document.getElementById("plus");
let textt = document.getElementById("textt");
let button = document.querySelectorAll(".buttonAll");
let firstValue = "";
let operand = "";
let secondValue = "";

button.forEach((button) => {
  button.addEventListener("click", recordKey);
});
function recordKey(event) {
  if (
    event.target.value !== "+" &&
    event.target.value !== "-" &&
    event.target.value !== "×" &&
    event.target.value !== "÷" &&
    operand === ""
  ) {
    if (textt.innerHTML === "0") {
      firstValue = event.target.value;
    } else {
      firstValue += event.target.value;
    }
    textt.innerHTML = firstValue;
  } else if (
    event.target.value === "+" ||
    event.target.value === "-" ||
    event.target.value === "×" ||
    event.target.value === "÷"
    
  ) {
    operand = event.target.value;
  } else {
    if(event.target.value !== "=" && textt.innerHTML[0]!== "0")
    
      secondValue += event.target.value;
    console.log("Second : ", secondValue);

    textt.innerHTML = secondValue;
  }

  //   console.log(operand);
  
  if (event.target.value === "=" && firstValue && secondValue && operand) {

    switch (operand) {
      case "+":
        result = parseFloat(firstValue) + parseFloat(secondValue);
        break;

      case "-":
        result = parseFloat(firstValue) - parseFloat(secondValue);
        break;

      case "×":
        result = parseFloat(firstValue) * parseFloat(secondValue);
        break;

      case "÷":
        result = parseFloat(firstValue) / parseFloat(secondValue);
        break;

      case "%":
        result = parseFloat(firstValue) / 100;
        break;

      //   case "+-":
      //     if{

      //     }
      //     result = firstValue + secondValue;
      //     break;

      default:
        break;
    }
    secondValue = 0;
    operand = "";
    
    textt.innerHTML = result;
  }
  //   if(result){

  //         firstValue = result;
  //   }
  if (event.target.value === "C") {
    textt.innerHTML = "0";
    firstValue = 0;
    secondValue = 0;
    operand = "";
  }
  if (event.target.value === "+-") {
    if (firstValue) {
      var updatedvalue = 0 - parseInt(firstValue);
      textt.innerHTML = updatedvalue;
    }
  }
  if (event.target.value === "%") {
    if (firstValue) {
      firstValue = firstValue / 100;
      textt.innerHTML = firstValue;
    }
  }

  if (event.target.value === ".") {
    if (firstValue) {
      //   var stringfirstValue = "";
      firstValue = firstValue.toString() + ".";
      //   firstValue = parseFloat(firstValue);
      //   textt.innerHTML = textt.innerHTML + ".";
      // firstValue = textt.innerHTML ;
      firstValue = textt.innerHTML;
    }
  }
}
