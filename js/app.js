let money = prompt("Ваш бюджет на месяц?", "0.00 грн");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2020-04-20");

let a1 = prompt(
  "Введите обязательную статью расходов в этом месяце",
  "Интернет"
);
let b1 = prompt("Во сколько обойдется?", "0.00 грн");
let a2 = prompt("Введите обязательную статью расходов в этом месяце", "ТВ");
let b2 = prompt("Во сколько обойдется?", "0.00 грн");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

appData.expenses[a1] = b1;
appData.expenses[a2] = b2;

let oneDayBudget = appData.budget / 30;

alert("Бюджет на 1 день будет составлять " + oneDayBudget + " грн");
