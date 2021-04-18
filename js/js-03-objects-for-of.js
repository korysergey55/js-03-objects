//Перебери массив объектов colors используя цикл for...of.

// Добавь в массив hexColors значения свойств hex,

// а в массив rgbColors значения свойств rgb из всех объектов массива colors.

const userColors = function (colors) {
  const hexColors = [];
  const rgbColors = [];

  for (const key of colors) {
    hexColors.push(key.hex);
    rgbColors.push(key.rgb);
  }
  console.log('значения свойств hex -',hexColors, 'значения свойств rgb -',rgbColors);
  return hexColors, rgbColors;
};

const colorsForIteration = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];
userColors(colorsForIteration);
