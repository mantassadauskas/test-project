import "../src/main.css";
import "../src/style.scss";

import { changeBodyBackground } from "./events.js";

console.log("Hello webpack!");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    changeBodyBackground();
    console.log('click');

});
