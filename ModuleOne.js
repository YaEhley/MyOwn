//Задача-1
//Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2. В іншому випадку функція повинна повернути булеве значення false.
/*
function test(str1, str2) {
    if(str1[0] === str2[str2.length-1]) {
        return true;
    } else{
        return false;
    }
}
console.log(test("ammo","omma"));
*/

//Задача-2
//Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2. В іншому випадку функція повинна повернути булеве значення false.
/*
function test(str1, str2) {
    if(str1[0] === str2[0]) {
        return true;
    } else{
        return false;
    }
}
console.log(test("ammo","omma"));
console.log(test("ammo","Alabama"));
console.log(test("ammo","alarm"));
*/

//Задача-3
//Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2. В іншому випадку функція повинна повернути булеве значення false.
/*
function test(str1, str2) {
    if(str1.length === str2.length) {
        return true;
    } else{
        return false;
    }
}
console.log(test("ammo","omma"));
console.log(test("ammo","Alabama"));
console.log(test("ammo","alarm"));
*/

//Задача-4
//Напишіть функцію яка приймає число num. Функція повинна повернути булеве значення true якщо кількість цифр у числі парна. В іншому випадку функція повинна повернути булеве значення false.
/*
function test(num){
    if ((String(num).length)%2 == 0){
        return true;
    } else {
        return false;
    }
}
console.log(test(43));
console.log(test(433));
console.log(test(0));
*/

//Задача-5
//Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 більше, ніж num2. В іншому випадку функція повинна повернути булеве значення false.
/*
function test(num1, num2){
    if (num1 > num2){
        return true;
    } else {
        return false;
    }
}
console.log(test(23, 12));
console.log(test(23, 122));
*/

//Задача-6
//Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 ділиться на num2 без остачі. В іншому випадку функція повинна повернути булеве значення false.
/*
function test(num1, num2){
    if (num2 == 0){
        console.log("Change Your second number");
    } else{
        if (num1 % num2 == 0){
            return true;
        } else {
            return false;
        }
    }
}
console.log(test(23, 12));
console.log(test(23, 122));
console.log(test(4, 2));
console.log(test(23, 0));
console.log(test(50, 12.5));
*/

//Задача-7
//Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є непарним числом. В іншому випадку функція повинна повернути булеве значення false.
/*
function test(num){
    if (num % 2 == 0){
        return true;
    } else {
        return false;
    }
}
console.log(test(123));
console.log(test(0));
console.log(test(-4));
console.log(test(12));
*/

//Задача-8
//Напишіть функцію, яка приймає параметр str. Функція повинна повернути булеве значення true, якщо str містить принаймні одну велику літеру. В іншому випадку функція повинна повернути булеве значення false.
/*
function test(str){
    if (str === str.toLowerCase()){
        return false;
    } else {
        return true;
    }
}

console.log(test("Mr Kitty"));
console.log(test("lmao"));
console.log(test(" "));
*/

//Задача-9
//Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо довжина str1 більше, ніж довжина str2. В іншому випадку функція повинна повернути булеве значення false.
/*
function test(str1, str2){
    if(str1.trim().length > str2.trim().length){
        return true;
    } else{
        return false;
    }
}
console.log(test("One", "Their"));
console.log(test("one", "two"));
console.log(test("Three", "one"));
console.log(test("  ", " "));
*/

//Задача-12
//Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str містить хоча б один пробіл. В іншому випадку функція повинна повернути булеве значення false.
/*
function test(str){
    if(str.includes(" ")){
        return true;
    } else{
        return false;
    }
}
console.log(test("Mr Kitty"));
console.log(test("lmao"));
console.log(test(" "));
*/

//Задача-14
//Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str є паліндромом (однаковий у зворотному напрямку). В іншому випадку функція повинна повернути булеве значення false.
/*
function test(str){
    let reversedStr = str.split('').reverse().join('');
    if(str === reversedStr){
        return true;
    } else{
        return false;
    }
}
console.log(test("sssss"));
console.log(test("array"));
*/

//Задача-15
//Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 менше або дорівнює num2. В іншому випадку функція повинна повернути булеве значення false.
/*
function test(num1, num2){
    if (num1 <= num2){
        return true;
    } else {
        return false;
    }
}
console.log(test(23, 12));
console.log(test(23, 122));
console.log(test(4, 2));
console.log(test(23, 0));
console.log(test(50, 12.5));
console.log(test(-3, 12));
console.log(test(-3, -12));
*/

//Задача-17
//Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо перша літера str є голосною (a, e, i, o, u). В іншому випадку функція повинна повернути булеве значення false.
/*
function test(str){
    const vowels = "aeiou";
    if(str.trim().length > 0 && vowels.includes(str[0].toLowerCase())){
        return true;
    } else{
        return false;
    }
}
console.log(test("Mr Kitty"));
console.log(test("lmao"));
console.log(test(" "));
console.log(test("Alpha"));
console.log(test("imagination"));
console.log(test(""));
*/

//Задача-22
//Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 ділиться на 2, а num2 не ділиться на 2. В іншому випадку функція повинна повернути булеве значення false.
/*
function test(num1, num2){
    if(num1 % 2 == 0 && num2 %2 != 0){
        return true;
    } else{
        return false;
    }
}

console.log(test(23, 12));
console.log(test(23, 122));
console.log(test(4, 2));
console.log(test(24, 0));
console.log(test(50, 12.5));
console.log(test(-3, 12));
console.log(test(-3, -12));
*/

//Задача-25
//Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо str1 є частиною str2. В іншому випадку функція повинна повернути булеве значення false.
/*
function test(str1, str2){
    if(str2.includes(str1)){
        return true;
    } else {
        return false;
    }
}
console.log(test("Vik", "Viktor"));
console.log(test("Vip", "Viktor"));
console.log(test("Viktor", "Vik"));
*/

//Задача-29
//Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо остання літера str1 є голосною (a, e, i, o, u). В іншому випадку функція повинна повернути булеве значення false.
/*
function test(str1, str2) {
    const vowels = "aeiou";
    if(vowels.includes(str1[str1.length - 1])){
        return true;
    } else{
        return false;
    }
}

console.log(test("Emma"));
console.log(test("Alex"));
*/

//Task 1
//Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
/*
const value1 = 27.5;
const value2 = 27.3;
const value3 = 27.9;

console.log(`Floor numbers: ${Math.floor(value1)}, ${Math.floor(value2)}, ${Math.floor(value3)};
ceil numbers: ${Math.ceil(value1)}, ${Math.ceil(value2)}, ${Math.ceil(value3)}
and round numbers: ${Math.round(value1)}, ${Math.round(value2)}, ${Math.round(value3)}`);
*/

//Task 3
//Напиши скрипт який переведе значення totalMinutes (кількість хвилин) рядок у форматі годин та хвилин HH:MM.
//  70 покаже 01:10
//  450 покаже 07:30
//  1441 покаже 24:01
/*
const totalMinutes1 = 70;
const totalMinutes2 = 450;
const totalMinutes3 = 1441;

const hours1 = Math.floor(totalMinutes1 / 60) % 24;
const minutes1 = totalMinutes1 % 60;
const doubleDigitHours1 = String(hours1).padStart(2,0);
const doubleDigitMinutes1 = String(minutes1).padStart(2,0);

const hours2 = Math.floor(totalMinutes2 / 60) % 24;
const minutes2 = totalMinutes2 % 60;
const doubleDigitHours2 = String(hours2).padStart(2,0);
const doubleDigitMinutes2 = String(minutes2).padStart(2,0);

const hours3 = Math.floor(totalMinutes3 / 60) % 24;
const minutes3 = totalMinutes3 % 60;
const doubleDigitHours3 = String(hours3).padStart(2,0);
const doubleDigitMinutes3 = String(minutes3).padStart(2,0);

console.log(`${doubleDigitHours1}:${doubleDigitMinutes1};
${doubleDigitHours2}:${doubleDigitMinutes2};
${doubleDigitHours3}:${doubleDigitMinutes3}.`)
*/
/*
const totalMinutesArray = [70, 450, 1441];
function formatTime(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60) % 24;
    const minutes = totalMinutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}
const formattedTimes = totalMinutesArray.map(formatTime);
console.log(formattedTimes.join('; ') + '.');
*/

//Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не дорівнює undefined або null. У в іншому випадку має надаватися значення defaultValue. Перевір роботу скрипта для сліпучих значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор "?" (nullish coalescing operator).
//const incomingValue = 5;
//const defaultValue = 10;
//const value = incomingValue || defaultValue;
//console.log(value);
/*
const incomingValue = 5;
const defaultValue = 10;
const value = incomingValue ?? defaultValue;
console.log(value);
*/

//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored). Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
/*
const speedKmPerHour = 1.08;
const speedCmPerSecond = Math.floor(speedKmPerHour * 1000*100/3600);
console.log(`${speedCmPerSecond} cm/sec`);
*/