"use strict";
console.log("main.js");

const sectionTitleEl = document.getElementById("sectionTitle");
const authorEl = document.getElementById("author");
const textEl = document.getElementById("text");
const inputColorEl = document.getElementById("artColorInput");
const btnEl = document.getElementById("btn");
const btnHideEl = document.getElementById("hideBtn");
const articleEl = document.getElementById("article");
const toggleBtn = document.getElementById("toggleBtn");

//textEl.style.display = "block";

function styleElement(element) {
  element.style.fontWeight = "400";
  element.style.fontSize = "3rem";
  element.style.marginBottom = "0.3em";
}

styleElement(sectionTitleEl);
styleElement(authorEl);

textEl.style.lineHeight = "1.5";
textEl.style.letterSpacing = "2px";
textEl.style.fontStyle = "italic";

// inputColorEl.addEventListener("input", () => {
//   textEl.style.color = `${inputColorEl.value}`;
// });

inputColorEl.addEventListener("input", (event) => {
  console.log("event.target.value ===", event.target.value);
  const colorValueFromInput = event.target.value;
  sectionTitleEl.style.backgroundColor = colorValueFromInput;
});

btnEl.addEventListener("click", () => {
  articleEl.style.width = "50%";
});

//getComputedStyle($0).getPropertyValue('display');

btnHideEl.addEventListener("click", () => {
  if (articleEl.style.display === "block" || articleEl.style.display === "") {
    articleEl.style.display = "none";
    btnHideEl.textContent = "Show article";
    // btnHideEl.textContent = btnHideEl.textContent.replace('Hide', 'Show');
  } else if (articleEl.style.display === "none") {
    articleEl.style.display = "block";
    btnHideEl.textContent = "Hide article";
  }
});

// const accTitleEl = document.querySelectorAll(".accTitle");
// hideAll();
// for (let title of accTitleEl) {
//   const accTextEl = title.nextElementSibling;
//   title.addEventListener("click", () => {
//     if (accTextEl.style.display === "none") {
//       hideAll();
//       accTextEl.style.display = "block";
//     } else if (accTextEl.style.display === "block") hideAll();
//   });
// }

// function hideAll() {
//   const accTextEl = document.querySelectorAll(".accText");
//   for (let item of accTextEl) item.style.display = "none";
// }

toggleBtn.addEventListener("click", () => {
  const list = articleEl.classList;
  list.toggle("specialArt");
});

/**
 * Accordion
 */

// const accTitleEl = document.querySelectorAll(".accTitle");
// hideAll();
// for (let title of accTitleEl) {
//   const accTextEl = title.nextElementSibling;
//   console.log("accTextEl ===", accTextEl);
//   title.addEventListener("click", () => {
//     if (accTextEl.classList.contains("displayNone")) {
//       hideAll();
//       accTextEl.classList.remove("displayNone");
//       accTextEl.classList.add("open");
//       console.log("accTextEl.classList ===", accTextEl.classList);
//     } else if (accTextEl.classList.contains("open")) hideAll();
//   });
// }

// function hideAll() {
//   const accTextEl = document.querySelectorAll(".accText");
//   for (let item of accTextEl) item.classList.add("displayNone");
// }

const accTitleEl = document.querySelectorAll(".accTitle");
for (let el of accTitleEl) {
  el.addEventListener("click", accOpenHandler);
}

function hideAll() {
  const accTextEl = document.querySelectorAll(".accText");
  for (let item of accTextEl) item.style.height = 0;
}

function accOpenHandler(event) {
  const currentEl = event.target;
  hideAll();
  const currAccTextEl = currentEl.nextElementSibling;
  currAccTextEl.style.height = currAccTextEl.scrollHeight + `px`;
}
