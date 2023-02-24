const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");


function plus() {
    result.innerText = Number(num1.value) + Number(num2.value)
}
function minus() {
    result.innerText = Number(num1.value) - Number(num2.value)
}
function multi() {
    result.innerText = Number(num1.value) * Number(num2.value)
}
function div() {
    result.innerText = Number(num1.value) / Number(num2.value)
}
function mod() {
    result.innerText = Number(num1.value) % Number(num2.value)
}























function fn1() {
    //누르면 계산되어서 result에 값 나오기
    plus1 = Number(document.getElementById("num1").value);
    plus2 = Number(document.getElementById("num2").value);
    
    let result = 0;
  switch (value) {
    case "+":
      result = plus1 + plus2;
      break;
    case "-":
      result = plus1 - plus2;
      break;
    case "*":
      result = plus1 * plus2;
      break;
    case "/":
      result = plus1 / plus2;
      break;
    case "%":
      result = plus1 % plus2;
      break;
  }

  document.getElementById("typeBox").innerHTML = result; 
}

