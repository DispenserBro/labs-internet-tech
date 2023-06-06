// Задание 1 вариант 2

let a = parseFloat(prompt("Введите значение α:"))

let z1 = Math.cos(a) + Math.sin(a) + Math.cos(3 * a) + Math.sin(3 * a)

let z2 = 2 * Math.sqrt(2) * Math.cos(a) * Math.sin((Math.PI / 4) + (2 * a))

// Задание 2 вариант 2
function round(value, digits = 0) {
  return Math.round(value * Math.pow(10, digits)) / Math.pow(10, digits)
}

function choice(choices) {
  let index = Math.floor(Math.random() * choices.length)
  return choices[index]
}

function randNum(power = 1, roundTo = 2) {
  return round(Math.random() * Math.pow(10, power), 2)
}

let arrLen = parseInt(prompt("Введите кол-во элементов массива:"))
let arr = []

for (let i = 0; i < arrLen; i++) {
  arr.push(randNum() * choice([-1, 1]))
}

// a
let sumPos = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) sumPos += arr[i]
}

// b
let arrCopy = arr.map((x) => Math.abs(x))
let maxAbsInd = arrCopy.indexOf(Math.max(...arrCopy))
let minAbsInd = arrCopy.indexOf(Math.min(...arrCopy))

let startInd = maxAbsInd > minAbsInd ? minAbsInd : maxAbsInd
let endInd = maxAbsInd > minAbsInd ? maxAbsInd : minAbsInd
let elsMul = 1

for (let i = startInd + 1; i < endInd; i++) {
  elsMul *= arr[i]
}

if(Math.abs(maxAbsInd - minAbsInd) === 1) elsMul = NaN

// c
let firstPosInd
let lastPosInd
let newArr = []

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    firstPosInd = i
    break
  }
}

for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] > 0) {
    lastPosInd = i
    break
  }
}

arrCopy2 = arr.map((x) => x)
newArr = arrCopy2.splice(firstPosInd + 1, lastPosInd - firstPosInd - 1)


// Задание 3
document.getElementById("content-task1-1").innerHTML = z1
document.getElementById("content-task1-2").innerHTML = z2

document.getElementById("task2-arr").innerHTML = "Массив: " + arr.toString() + "<br>"
document.getElementById("task2-min").innerHTML = "Минимальное по модулю: " + arr[minAbsInd] + "<br>"
document.getElementById("task2-max").innerHTML = "Максимальное по модулю: " + arr[maxAbsInd] + "<br>"
document.getElementById("task2-a").innerHTML = "a)" + round(sumPos, 2) + "<br>"
document.getElementById("task2-b").innerHTML = "b)" + elsMul + "<br>"
document.getElementById("task2-c").innerHTML = "c) Первый массив: " + arrCopy2 + "<br> Второй массив: " + newArr  + "<br>"

console.log(z1)
console.log(z2)
console.log(arr)
console.log(arr[minAbsInd])
console.log(arr[maxAbsInd])
console.log(sumPos)
console.log(elsMul)
console.log(arrCopy2, arrCopy2)