let money = +prompt("Ваш бюджет на месяц?", "0.00 грн");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2020-04-20");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

// Использование цикла For

for (let i = 0; i < 2; i++) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", "");
  let b = prompt("Во сколько обойдется?", "");

  if (
    typeof a === "string" &&
    a != null &&
    b != null &&
    a != "" &&
    b != "" &&
    a.length < 50
  ) {
    console.log("Done!");
    appData.expenses[a] = b;
  } else {
    console.log("Wrong result!");
    i--;
  }
}

appData.moneyPerDay = appData.budget / 30;

alert("Бюджет на 1 день будет составлять " + appData.moneyPerDay + " грн.");

console.log(appData);

if (appData.moneyPerDay < 100) {
  console.log("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
  console.log("Это высокий уровень достатка!");
} else {
  console.log("Произошла ошибка");
}

// Используем цикл WHILE

/* let i = 0;
while (i < 2) {
  let a = prompt("Введите обязательную статью расходов в этом месяце", "");
  let b = prompt("Во сколько обойдется?", "");

  if (
    typeof a === "string" &&
    a != null &&
    b != null &&
    a != "" &&
    b != "" &&
    a.length < 50
  ) {
    console.log("Done!");
    appData.expenses[a] = b;
  } else {
    console.log("Wrong result!");
    i--;
  }
  i++;
}


*/
// Используем цикл DO...WHILE
/*
let i = 0;
do {
  let a = prompt("Введите обязательную статью расходов в этом месяце", "");
  let b = prompt("Во сколько обойдется?", "");

  if (
    typeof a === "string" &&
    a != null &&
    b != null &&
    a != "" &&
    b != "" &&
    a.length < 50
  ) {
    console.log("Done!");
    appData.expenses[a] = b;
  } else {
    console.log("Wrong result!");
    i--;
  }
  i++;
} while (i < 2);


*/
