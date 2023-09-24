let day = prompt("Введите число от 1 до 31");
if (day >= 1 && day <= 31) {
  if (day <= 10) {
    console.log("Первая декада месяца");
  } else if (day <= 20) {
    console.log("Вторая декада месяца");
  } else {
    console.log("Третья декада месяца");
  }
} else {
  console.log("Введите, пожалуйста, число в указанном диапазоне :)");
}
