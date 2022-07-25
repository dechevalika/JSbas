const userNum = Number(prompt('Введиете целое положительное число'));
const calcHundred = Math.trunc(userNum / 100) % 10; //+
const calcTen = Math.trunc(userNum / 10) % 10;
const calcOne = userNum % 10; //+

console.log(`В числе ${userNum}
сотен: ${calcHundred} 
десятков ${calcTen}
единиц: ${calcOne}`); 

/* 1. вводим например число 2341
2. вычисляем сотни. 2341 / 100 = 23.41
чтобы взять целую часть, применяем ф-ю Math.trunc(),
получаем 23, затем 23 % 10 = 2 (остаток 3)
сотни 3
3. вычисляем десятки 2341 / 10 = 234.1
234 % 10 = 23 (остаток 4)
4. здесь просто берем остаток 
2341 % 10 = 234 (остаток 1) */
