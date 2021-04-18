
// Напиши функцию которая принимает объект зарплат,

// где имя свойства это имя сотрудника, а значение свойства это зарплата.

// Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.

// Используй переменную totalSalary для хранения общей суммы зарплаты.

const countTotalSalary = function(salaries) {
  let totalSalary = 0;
  const arr = Object.values(salaries);
  for (const key of arr) {
    totalSalary += key;
  }
console.log('Общуя сумму зарплат сотрудников -', totalSalary)
  return totalSalary;
}
countTotalSalary({ mango: 100, poly: 150, alfred: 80 }); //возвращает 330.
countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }); // возвращает 400.