/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //variables
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  //generar un item aleatorio de cada uno de los arrays
  function randomNumber(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return index;
  }

  //concatenarlos => probar con un console.log
  function excuseGenerator() {
    let string =
      who[randomNumber(who)] +
      " " +
      action[randomNumber(action)] +
      " " +
      what[randomNumber(what)] +
      " " +
      when[randomNumber(when)];
    console.log("Excuse: " + string);
    return string;
  }

  //HTML
  document.getElementById("excuse").innerHTML = excuseGenerator();
};
