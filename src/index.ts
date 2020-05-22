const sum = (x, y) => {
  if (typeof x !== "number") {
    throw new TypeError("x should be number");
  }
  if (typeof y !== "number") {
    throw new TypeError("y should be number");
  }

  return x + y;
};

document.querySelector("#app").textContent = sum(1, 2);
