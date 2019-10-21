function addNum() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  let c = a + b;
  console.log(c);
  document.getElementById("output").value = c;
}

function subtractNum() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  let c = a - b;
  console.log(c);
  document.getElementById("output").value = c;
}

function multiplyNum() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  let c = a * b;
  console.log(c);
  document.getElementById("output").value = c;
}

function divideNum() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);
  let c = a / b;
  console.log(c);
  document.getElementById("output").value = c;
}
