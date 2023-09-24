function findMax(number1, number2, number3) {
  return Math.max(number1, number2, number3);
}
const input1 = parseInt(prompt("Введите первое число:"));
const input2 = parseInt(prompt("Введите второе число:"));
const input3 = parseInt(prompt("Введите третье число:"));
const maxNumber = findMax(input1, input2, input3);
console.log("Максимальное число = " + maxNumber);
