"use strict";

let money, time;

function start (){
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == '' || money ==null){
        money = +prompt("Ваш бюджет на месяц?", ''); 
    }
}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    saving: true,
    chooseExpenses: function() {
        for (let i=0; i<2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
            
            if( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
                appData.expenses[a] = b;
            }else{
                i--;
            } 
        }
    },
    detectDayBudget: function() {                                                   //расчет дневного бюджета
        appData.moneyPerDay = (appData.budget /30).toFixed(); 
        alert("Ежедневный бюджет: " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function() {                                                       //расчет уровня достатка
        if(appData.moneyPerDay<100) {
            console.log("Минимальный уровнь достатка");
        } else if (appData.moneyPerDay>100 && appDataPerDay<2000){
            consol.log("Средний уровень достатка");
        } else if (appData.moneyPerDay>2000){
            console.log("Высокий уровень домтатака");
        } else {
            console.log("Что-то пошло не так, произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings ==true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {                                                   //расчет необязательных расходов
        for(let i=1; i<=3; i++)
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);

    },
    chooseIncome: function() {                                       //При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)
        let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', '');
        if (typeof(items) != 'string' || items =='' || typeof(items) ==null){
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
        }else{
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?'));
        appData.income.sort();
        }
        appData.income.forEach (function (itemmassive, i){
            alert ('Способы доп.заработка: ' + (i+1) + '-' +itemmassive);
        });
    }
};

for (let key in appData) {     //Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)
    console.log('Наша программа включает в себя данные: ' + key + '-' +appData[key]);
}

