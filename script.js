// 1 задача.
for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    }
    if (i % 2 === 0 && i !== 0) {
        console.log(`${i} - четное число`);
    }
    if (i % 2 !== 0) {
        console.log(`${i} - нечетное число`);
    }
}

// 2 задача.
const array = [1, 2, 3, 4, 5, 6, 7];
const del = array.splice(3, 2);
console.log(array);


//3 задача.
const arrRandom = [];
for (let i = 0; i < 5; i++) {
    arrRandom.push(Math.round(Math.random() * 10));
}
console.log(arrRandom);
console.log(arrRandom.map((element) => element ** 2)); 


//4 задача.
const arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.round(Math.random() * 10));
}
console.log(arr); //выводит рандомный массив
let arrResult = arr.filter(item => item !== 3); //возвращает массив, состоящий из элементов массива, которые не равны 3
console.log(arrResult); //вывод этого массива
let arrPercent = arrResult.map((item) => (item * 10)/100 + item);
console.log(arrPercent);

//5 задача. 
for (let i = 0; i < 10; console.log(i++)) {  
    //пусто))
}

//6 задача.
let x = 'x';
console.log(x);
for(let i = 1; i <= 19; i++) {
console.log(x += 'x');
}


