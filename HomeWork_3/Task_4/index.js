function sumNumber(a, b) {
  return a + b;
}
console.log(sumNumber(1, 6));

function diffNumber(a, b) {
  if (a === b) {
    return 0;
  } else if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}
console.log(diffNumber(6, 2));

function multiplyNumber(a, b) {
  return a * b;
}
console.log(multiplyNumber(2, 6));

function divideNumber(a, b) {
  return a / b;
}
console.log(divideNumber(6, 2));
