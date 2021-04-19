
// Общая стоимость товара

// Напиши функцию которая принимает один параметр productName - название товара.

// Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 9 },
];

const calculateTotalPrice = function (productName) {
  let total = 0;
  for (const product of products) {
    if (product.name === productName) {
      total = product.price * product.quantity;
    }
  }console.log('Указанный товар стоит -', total)
  return total;
}

calculateTotalPrice('Радар') //возвращает 5200.
calculateTotalPrice('Дроид') //возвращает 2800.