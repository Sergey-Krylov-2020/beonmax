'use strict';

let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    saving: false
};

for (let i=0; i<2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    
    if( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        console.log("done")
        appData.expenses[a] = b;
    }else{
        console.log("Плохой результат, попробуите еще");
        i--;
    } 
}

// let i=0;

// while (i<2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
    
//     if( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
//         console.log("done")
//         appData.expenses[a] = b;
//     }else{
//         console.log("Плохой результат, попробуите еще");
//         i--;
//     }
//     i++;
// }

// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
//         console.log("done")
//     appData.expenses[a] = b;
//     }else{
//         console.log("Плохой результат, попробуите еще");
//         i--;
//     }
//     i++;  
// }
// while (i<2);



appData.moneyPerDay = appData.budget /30;
    
alert("Ежедневный бюджет: " + appData.moneyPerDay + "руб.");

if(appData.moneyPerDay<100) {
    console.log("Минимальный уровнь достатка");
}else if (appData.moneyPerDay>100 && appDataPerDay<2000){
    consol.log("Средний уровень достатка");
}else if (appData.moneyPerDay>2000){
    console.log("Высокий уровень домтатака");
}else {
    console.log("Что-то пошло не так, произошла ошибка");
}