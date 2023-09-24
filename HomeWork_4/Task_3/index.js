const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random() * 10));
}
const sumArr = arr.reduce((a, b) => a + b);
const minArr = Math.min(...arr);
const hasThreeArr = arr.includes(3);
console.log("Массив:", arr);
console.log("Сумма элементов:", sumArr);
console.log("Минимальное число:", minArr);
console.log("Наличие числа 3:", hasThreeArr);
