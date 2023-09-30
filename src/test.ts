const between = {
  min: 3,
  max: 15,
};
const randomOddNumber = Helper.getOddNumber();
const randomOddNumberBetween = Helper.getOddNumber(between.min, between.max);

const randomEvenNumber = Helper.getEvenNumber();
const randomEvenNumberBetween = Helper.getEvenNumber(between.min, between.max);

console.time("Test Start");

console.assert(Helper.isOdd(randomOddNumber));
console.assert(
  Helper.isOdd(randomOddNumberBetween) &&
    randomOddNumberBetween >= between.min &&
    randomOddNumberBetween <= between.max
);

console.assert(Helper.isEven(randomEvenNumber));
console.assert(
  Helper.isEven(randomEvenNumberBetween) &&
    randomEvenNumberBetween >= between.min &&
    randomEvenNumberBetween <= between.max
);

console.timeEnd("Test Start");
