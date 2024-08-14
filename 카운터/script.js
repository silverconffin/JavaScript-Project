const counter = document.querySelector("div h1");
const inbtn = document.querySelector(".increase-btn");
const debtn = document.querySelector(".decrease-btn");
const rebtn = document.querySelector(".reset-btn");

let count = 0;

const increase = () => {
  count++;
  counter.textContent = count;
};
const decrease = () => {
  count--;
  counter.textContent = count;
};

const reset = () => {
  count = 0; // 비교 연산자 == 대신 할당 연산자 = 사용
  counter.textContent = count;
};

inbtn.addEventListener("click", increase);
debtn.addEventListener("click", decrease);
rebtn.addEventListener("click", reset);
