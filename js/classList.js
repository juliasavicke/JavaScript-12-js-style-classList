"use strict";
console.log("classList.js");

// element.classList API
// .add - prideti
// .remove - pasalinti
// .toggle - toglinti
// .contains - grazina, ar yra tokia klase

const mainEl = document.querySelector("main");
const mainClassList = mainEl.classList;
mainClassList.add("container");

const unlistedEl = document.querySelector(".unlisted");
const unlistedClassList = unlistedEl.classList;
unlistedClassList.add("card");

const titleEl = document.getElementById("title");
const titleClassList = titleEl.classList;
titleClassList.add("mainTitle");

titleEl.addEventListener("click", () => {
  titleClassList.toggle("mainTitle");
});

unlistedEl.addEventListener("click", () => {
  const contains = unlistedClassList.contains("unlisted");
  alert(contains ? "turi" : "neturi");
});
