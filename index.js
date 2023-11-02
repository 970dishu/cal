const input = document.getElementById("data-con");

const modules = document.querySelector(".modules")



let res = 0;
let inputdata = "";
let typeddata = 0;
let operator = ""; //+ * 1+2 1*2

// operator 1 + 2 * 5
//  inputvalue = 1 , 
//  + ---> if res == 0 ---> yes ---> res = inputvalue = 1
//  inputvalue = 5 
// * , oprator = * ,calculate function = 1 5 *
// inputvalue = 6



input.addEventListener("input", (e) => {
  typeddata = e.target.value;
});

let arryOfButtons = document.querySelectorAll(".grid-item");
console.log(arryOfButtons);

arryOfButtons.forEach((eachElement) => {
  eachElement.addEventListener("click", (e) => {
    // console.log(eachElement.classList[1])
    console.log(res,inputdata,operator)
    if (eachElement.classList[1] == "equals") {
      calculate(res, parseInt(inputdata), operator);
      inputdata = "";
      operator = "";
    } else {
      figureOutClick(eachElement.classList[1]);
    }

    console.log(res,inputdata,operator)
  });
});

const naam = (a, b) => {
  return a + b;
};
// 1+2*5
1+4*2*5-(5+10)
1+2*5

function afterOperatorClicked(currentOp) {
  // 1 + 2 * 5
  // operator = +
  if (res != 0 && inputdata != "") {
    calculate(res, parseInt(inputdata), operator);
    
  } else if (res == 0) {
    res = parseInt(inputdata); // 1
  }
  inputdata = "";
  operator = currentOp

}




function makeResZero() {
  if (operator == "" && res != 0) {
    res = 0; // 1
  }
}

// res = 4 , inputdata = "" operator = +
function figureOutClick(value) {
  switch (value) {
    case "one":
      makeResZero();
      inputdata = inputdata + "1";
      break;
    case "two":
      makeResZero();
      inputdata = inputdata + "2";
      break;
    case "three":
      makeResZero();
      inputdata = inputdata + "3";
      break;
    case "four":
      makeResZero();
      inputdata = inputdata + "4";
      break;
    case "five":
      makeResZero();
      inputdata = inputdata + "5";
      break;
    case "six":
      makeResZero();
      inputdata = inputdata + "6";
      break;
    case "seven":
      makeResZero();
      inputdata = inputdata + "7";
      break;
    case "eight":
      makeResZero();
      inputdata = inputdata + "8";
      break;
    case "nine":
      makeResZero();
      inputdata = inputdata + "9";
      break;
    case "zero":
      makeResZero();
      inputdata = inputdata + "0";
      break;
    case "modules":
      
      afterOperatorClicked("%");
      break;
    case "plus":
      
      afterOperatorClicked("+");
      break;
    case "minus":
      
      afterOperatorClicked("-");
      break;
    case "multiply":
      
      afterOperatorClicked("*");
      break;
    case "divide":
      
      afterOperatorClicked("/");
      break;
    case "null":
      inputdata = "";
      res = 0;
      break;
    default:
  }

  input.value = parseInt(inputdata);
}

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      console.log(a + b);
      res = a + b;
      break;
    case "-":
      console.log(a - b);
      res = a - b;
      break;
    case "/":
      console.log(a / b);
      res = a / b;
      break;
    case "*":
      console.log(a * b);
      res = a * b;
      break;
    case "%":
      console.log(a % b);
      res = a % b;
      break;
    default:
      console.log("wrong operator");
  }
  input.value = res;
}
