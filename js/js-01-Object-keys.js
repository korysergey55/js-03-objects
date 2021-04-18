//  Object.keys(obj), который принимает объект и возвращает массив ключей его собственных свойств.

//  Если в объекте нет свойств, метод вернёт пустой массив.

// Скомбинировав результат Object.keys() и цикл for...of можно удобно перебрать собственные свойства объекта

//  не прибегая к использованию архаического цикла for...in с проверками принадлежности свойств.

// Мы перебираем массив ключей объекта и на каждой итерации получаем значение свойства с таким ключом.



const twoValues = function (apartment) {
  const values = [];
  const keys = Object.keys(apartment);
  for (const key of keys) {
    values.push(apartment[key]);
    values.push(key);
  }
  apartment.menegerRait = [9, 4, 4, 5, 6];
  console.log('получаем значение свойства с ключом - ', values);
  return values;
};
const apartmentValue = {
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
};
twoValues(apartmentValue);


