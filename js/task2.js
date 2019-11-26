/**
 * Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
Функция сложения 2-х объектов-дробей;
Функция вычитания 2-х объектов-дробей;
Функция умножения 2-х объектов-дробей;
Функция деления 2-х объектов-дробей;
Функция сокращения объекта-дроби.
 */


let fraction = {
    numerator: 3,
    denominator: 9,
    sum: function () {
        return `result of addition: ${(this.numerator + this.denominator).toFixed(2)}`
    },
    subtraction: function () {
        return `result of subtraction: ${(this.numerator - this.denominator).toFixed(2)}`
    },
    multiplications: function () {
        return `result of multiplications: ${(this.numerator * this.denominator).toFixed(2)}`
    },
    divisions: function () {
        return `result of divisions: ${(this.numerator / this.denominator).toFixed(2)}`
    },
    reductions: function (num) {
        return `result of reductions: 
 numerator;${(this.numerator / num).toFixed(2)}
 denominator;${(this.denominator / num).toFixed(2)}`
    },
}
console.log(fraction.sum());
console.log(fraction.subtraction());
console.log(fraction.multiplications());
console.log(fraction.divisions());
console.log(fraction.reductions(4));