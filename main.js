const mybtn = document.getElementById("btn");
const label1 = document.getElementById("label-1");
const label2 = document.getElementById("label-2");
const label3 = document.getElementById("label-3");

const max = 6;
const min = 1;
let randnum1;
let randnum2;
let randnum3;

mybtn.onclick = function () {
  randnum1 = Math.floor(Math.random() * max) + min;
  label1.textContent = randnum1;
  randnum2 = Math.floor(Math.random() * max) + min;
  label2.textContent = randnum2;
  randnum3 = Math.floor(Math.random() * max) + min;
  label3.textContent = randnum3;
}
