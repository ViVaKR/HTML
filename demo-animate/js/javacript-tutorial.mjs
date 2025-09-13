import { sayHello as say } from './utils.mjs';
import createArray from './arrays.mjs';
import { PI, add, Calculator } from './math.mjs';

console.log('module');

say('뽀빠이');
console.log(PI);
console.log(add(34, 56));
const calc = new Calculator();
console.log(calc.subtract(5, 3));

// array.mjs
createArray();

// ("Hello, World")
// const header = document.getElementsByTagName("header")[0];
// const logo = document.getElementById('logo');

// const child = document.querySelector('#btn-1');

// child.addEventListener("click", (event) => {
//     event.preventDefault();
//     const parent = child.parentElement;
//     parent.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
//     parent.style.border = 'none';
//     parent.style.borderRadius = '50px / 35px';
//     // const styles = window.getComputedStyle(parent);
//     // let size = styles.getPropertyValue('background-color');
//     // header.textContent = size;
//     setLogoProperties();
// });

// function setLogoProperties() {
//     logo.style.setProperty('color', 'orange', 'important');
//     logo.style.setProperty('font-weight', 700)
// }


// // CSS 변수값을 가져오기
// const rootStyle = window.getComputedStyle(document.documentElement);

// const targetValue = rootStyle.getPropertyValue('button');
// console.log(targetValue);
