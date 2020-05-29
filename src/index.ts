import { sum } from "./sum";

const element = document.querySelector("#app");
if (element) {
  element.textContent = sum(1, 2) as any;
}
