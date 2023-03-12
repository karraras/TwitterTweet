let input = document.querySelector("input");
let leftLetter = document.querySelector(" .footer .left");
let click = document.querySelector(".click button");
input.oninput = function () {
  let limit = 100;
  let value = input.value.length;
  leftLetter.innerHTML = `${limit - value}`;
  if (leftLetter.innerHTML < 100 && leftLetter.innerHTML >= 0) {
    leftLetter.classList.add("abled");
    click.classList.add("abled");
    leftLetter.style.color = "black";
  } else if (leftLetter.innerHTML < 0) {
    leftLetter.style.color = "red";
    click.classList.remove("abled");
  } else {
    leftLetter.classList.remove("abled");
    click.classList.remove("abled");
  }
};
