let arr0 = [];
let arr1 = []
let arr2 = []
let arr3 = []
let arr4 = []
let arr5 = []
let arrResult =[];
let counter = 0;

function random() {
  arrResult = [];
  let num1 = arrayRandElement(arr0);
  let num2 = arrayRandElement(arr1);
  let num3 = arrayRandElement(arr2);
  let num4 = 0;
  if (counter > 3) {
    num4 = arrayRandElement(arr3);
  }
  let num5 = 0;
  if (counter > 4) {
    num5 = arrayRandElement(arr4);
  }
  let num6 = 0;
  if (counter > 5) {
    num6 = arrayRandElement(arr5);
  }
  let sum = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5) + parseInt(num6)
  if (counter == 3 && sum > 17) {
    let text = document.getElementsByClassName('result');
    text[0].innerHTML = `${arr0[0]} : ${num1.substr(2)} <br>
    ${arr1[0]} : ${num2.substr(2)} <br>
    ${arr2[0]} : ${num3.substr(2)}`
    counter = 0;
  } else if (counter == 4 && sum > 20) {
    let text = document.getElementsByClassName('result');
    text[0].innerHTML = `${arr0[0]} : ${num1.substr(2)} <br>
    ${arr1[0]} : ${num2.substr(2)} <br>
    ${arr2[0]} : ${num3.substr(2)} <br>
    ${arr3[0]} : ${num4.substr(2)}`
    counter = 0;
  } else if (counter == 5 && sum > 24) {
    let text = document.getElementsByClassName('result');
    text[0].innerHTML = `${arr0[0]} : ${num1.substr(2)} <br>
    ${arr1[0]} : ${num2.substr(2)} <br>
    ${arr2[0]} : ${num3.substr(2)} <br>
    ${arr3[0]} : ${num4.substr(2)} <br>
    ${arr4[0]} : ${num5.substr(2)}`
  } else if (counter == 6 && sum > 27) {
    let text = document.getElementsByClassName('result');
    text[0].innerHTML = `${arr0[0]} : ${num1.substr(2)} <br>
    ${arr1[0]} : ${num2.substr(2)} <br>
    ${arr2[0]} : ${num3.substr(2)} <br>
    ${arr3[0]} : ${num4.substr(2)} <br>
    ${arr4[0]} : ${num5.substr(2)} <br>
    ${arr5[0]} : ${num6.substr(2)}`
  } else {
    random ()
  }
}

function arrayRandElement (arr) {
  console.log("aa")
    let rand = (Math.floor(Math.random() * (arr.length - 1)))+1;

    if (arrResult.indexOf(arr[rand]) == -1) {
        if (arr[rand] == "02сова" && arrResult.indexOf("05енот") == -1) {
          arrResult.push("05енот");
          return "05енот";
        }
      arrResult.push(arr[rand]);
      return arr[rand];
    } else {
      arrayRandElement (arr)
    }
}

function black(row, col) {
  let element = document.getElementsByClassName(`black`);
if (+row == 0) {
  element[+col].classList.toggle("visible");
} else {
  element[`${row}`+`${col}`].classList.toggle("visible");
}
}

function createArr(num, index, count) {
  counter++;
  let player = document.getElementsByTagName("input")[count];
  let name = player.value;
  element = document.getElementsByClassName(`r${index}`);
  num.push(`${name}`);
  if (!element[0].classList.contains('visible')) {
     num.push('10маркиса');
  }
  if (!element[1].classList.contains('visible')) {
     num.push('08кроты');
  }
  if (!element[2].classList.contains('visible')) {
     num.push('07птицы');
  }
  if (!element[3].classList.contains('visible')) {
     num.push('05бобры');
  }
  if (!element[4].classList.contains('visible')) {
     num.push('05енот');
  }
  if (!element[5].classList.contains('visible')) {
     num.push('03союз');
  }
  if (!element[6].classList.contains('visible')) {
     num.push('03вороны');
  }
  if (!element[7].classList.contains('visible')) {
     num.push('02сова');
  }
  if (!element[8].classList.contains('visible')) {
     num.push('02культ');
  }
  let button = document.getElementsByClassName(`below`);
  button[+index-1].textContent = `${name} готов(а)!`
  button[+index-1].classList.add("visible");
}
