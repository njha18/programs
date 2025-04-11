const btn = document.querySelector(".increment_btn");
const btnpress = document.querySelector(".innerContainer");
const count = document.querySelector(".secondInnerContainer");
var press = 0;
var trigger = 0;

const throttle = function (func, d) {
  let flag = true;
  return function (...args) {
    let context = this;

    if (flag) {
      func.apply(context,...args);
      flag = false;
    }
    setTimeout(() => {
      flag = true;
    }, 3000);
  };
};
const ThrottleCount = throttle(() => {
  count.innerHTML = ++trigger;
}, 800);

btn.addEventListener("click", () => {
  btnpress.innerHTML = ++press;
  ThrottleCount();
});
