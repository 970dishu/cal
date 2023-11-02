const input = document.getElementById("data-con");


let res = 0;
let inputdata = "";
let typeddata = 0;
let operator = ""; //+ * 1+2 1*2


input.addEventListener("input", (e) => {
  typeddata = e.target.value;
});

let arryOfButtons = document.querySelectorAll(".grid-item");
console.log(arryOfButtons);

arryOfButtons.forEach((eachElement) => {
  eachElement.addEventListener("click", (e) => {
    if (eachElement.classList[1] == "equals") {
      inputdata = eval(input.value)
      input.value = inputdata
    } else {
      figureOutClick(eachElement.classList[1]);
    }

  });
});

function makeResZero() {
  if (res != 0) {
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
      inputdata = inputdata + "%";
      break;
    case "plus":
      inputdata = inputdata + "+";
      break;
    case "minus":
      inputdata = inputdata + "-";
      break;
    case "multiply":
      inputdata = inputdata + "*";
      break;
    case "divide":
      inputdata = inputdata + "/";
      break;
    case "null":
      inputdata = "";
      res = 0;
      break;
    default:
  }

  input.value = (inputdata);
}


