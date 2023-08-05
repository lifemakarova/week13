//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = new Date().getFullYear();
console.log(currentYear); 

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDate = new Date();
const currentDay = currentDate.getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const currentYear = new Date().getFullYear();
const birthday = new Date(currentYear, 11, 23);
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const currentDate = new Date();
const futureDate = new Date();
futureDate.setMonth(currentDate.getMonth() + 1);
futureDate.setDate(currentDate.getDate() + 10);
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
const differenceInMilliseconds = futureDate.getTime() - currentDate.getTime();
const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

console.log(`Разница в днях: ${differenceInDays}`);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const currentDate = new Date();
const pastDate = new Date();
pastDate.setDate(currentDate.getDate() - 5);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
const differenceInMilliseconds = currentDate.getTime() - pastDate.getTime();
const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

console.log(`Разница в днях: ${differenceInDays}`);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const currentDate = new Date();
const nextWeek = new Date();
nextWeek.setDate(currentDate.getDate() + 7 - currentDate.getDay() + 1);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
const currentDate = new Date();
const nextWeek = new Date();
nextWeek.setDate(currentDate.getDate() + 7 - currentDate.getDay() + 1);

const options = { weekday: 'long' };
const nextWeekDay = nextWeek.toLocaleDateString(undefined, options);

console.log(`День недели для nextWeek: ${nextWeekDay}`);

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const currentYear = new Date().getFullYear();
const futureYear = currentYear + 5;
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const currentYear = new Date().getFullYear();
const futureYear = currentYear + 1;
const futureDateInFutureYear = new Date();
futureDateInFutureYear.setFullYear(futureYear);
futureDateInFutureYear.setMonth(11); 
futureDateInFutureYear.setDate(23);
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
const currentYear = new Date().getFullYear();
const futureYear = currentYear + 1; 

const differenceInYears = futureYear - currentYear;
console.log(`Разница в годах: ${differenceInYears}`);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const date = new Date(Date.parse(strDate));
console.log(date);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const timestamp = Date.parse(strDate);
console.log(timestamp);


//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = '2023/06/15';
const wrongDate = '2023/06/15';
const parsedDate = Date.parse(wrongDate);

if (isNaN(parsedDate)) {
  console.log('Неправильный формат даты');
} else {
  console.log('Правильный формат даты');
}


//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if (number > 0) {
    console.log('Число положительное');
  } else if (number === 0) {
    console.log('Число равно нулю');
  } else {
    console.log('Число отрицательное');
  }


//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
const number = 231;
if (number % 2 === 0) {
    console.log('Число чётное');
  } else {
    console.log('Число нечётное');
  }

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
const number = 231;
if (number % 3 === 0) {
    console.log('Число кратно 3');
  } else {
    console.log('Число не кратно 3');
  }


//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
const number = 231;
if (number >= 0 && number < 10) {
    console.log('Число однозначное');
  } else {
    console.log('Число не однозначное');
  }


//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
const number = 231;
if (number >= 10 && number < 100) {
    console.log('Число двузначное');
  } else {
    console.log('Число не двузначное');
  }


//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
const number = 231;
if (number > 0 || number === 0) {
    console.log('Число положительное или нуль');
  } else {
    console.log('Число отрицательное');
  }


//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
const number = 231;
if (number % 5 === 0 || number % 7 === 0) {
    console.log('Число кратно 5 или 7');
  } else {
    console.log('Число не кратно 5 или 7');
  }


//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
const number = 231;
if (number < 0 || number === 0) {
    console.log('Число отрицательное или нуль');
  } else {
    console.log('Число положительное');
  }


//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
const number = 231;
if (number >= 100 && number < 1000) {
    console.log('Число трёхзначное положительное');
  } else {
    console.log('Число не трёхзначное положительное');
  }


//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
const dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log('Понедельник');
    break;
  case 2:
    console.log('Вторник');
    break;
  case 3:
    console.log('Среда');
    break;
  case 4:
    console.log('Четверг');
    break;
  case 5:
    console.log('Пятница');
    break;
  case 6:
    console.log('Суббота');
    break;
  case 7:
    console.log('Воскресенье');
    break;
  default:
    console.log('Неверное число дня недели');
    break;
}


//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

switch (direction) {
    case 'N':
    fullName = 'Север';
    break;
  case 'S':
    fullName = 'Юг';
    break;
  case 'E':
    fullName = 'Восток';
    break;
  case 'W':
    fullName = 'Запад';
    break;
  default:
    fullName = 'Неверное направление';
    break;
}
console.log(fullName);
