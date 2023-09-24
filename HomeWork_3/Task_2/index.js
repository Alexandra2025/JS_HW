function calculateSalary() {
  const numberSalary = prompt("Введите размер заработной платы ");
  if (isNaN(numberSalary)) {
    console.log("Пожалуйста, введите число :) ");
  } else {
    const totalSalary = numberSalary * 0.87;
    console.log("Размер заработной платы за вычетом налогов = " + totalSalary);
  }
}
calculateSalary();
