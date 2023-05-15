const btn = document.querySelector(".btn");
const dice = document.querySelector(".dice");

btn.addEventListener("click", function task() {
  const decimalNumber = Math.random() * 6;
  const randomNumber = Math.ceil(decimalNumber);

  dice.innerHTML = randomNumber;
});
