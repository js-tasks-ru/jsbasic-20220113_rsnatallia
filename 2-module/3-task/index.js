let calculator = {
  a:0,
  b:0,
  read: function (a1,b1) { this.a=a1; this.b=b1},
  sum: function () {return this.a+this.b},
  mul: function () {return this.a*this.b}
   }

  calculator.read(3, 5);
  console.log(calculator.sum()); // 8
  console.log(calculator.mul()); // 15

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
