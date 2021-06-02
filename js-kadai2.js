let myTotal = 0;
let myInput = "";
let myCalc = "+";
let myFlg = 1; 
let text = document.getElementById("text");
let myValue = (myData) => {
  if (myData == 0 && myInput == 0) {
    text.innerHTML = 0;
  } else {
    myFlg = 0;
    myInput += myData;
    text.value = myInput;
  }
}
const myCalculate = (myData) => {
  if (myFlg == 0) {
    myFlg = 1;
    let myWork = myTotal + myCalc + myInput;
    myTotal = eval(myWork);
    myInput = "";
    text.value = myTotal;
  }
  if (myData == "=") {
    myTotal = 0;
    myCalc = "+";
  } else {
    myCalc = myData;
  }
}
const myC = () => {
  myTotal = 0;
  myCalc = "+";
  myInput = "";
  text.value = myTotal;
}