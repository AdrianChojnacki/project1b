const btn = document.querySelector(`button`);
const list = document.querySelector(`ul`);
let number = 1;

const addEl = () => {
  const li = document.createElement("li");
  li.textContent = number;

  if (number % 3 === 0) {
    li.classList.add("big");
  }

  list.appendChild(li);
  number += 2;
};

btn.addEventListener(`click`, addEl);
