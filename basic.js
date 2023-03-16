"use strict";
const picContainer = document.querySelector(".pics");
const allImgs = document.querySelectorAll(".pic-basic");

picContainer.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("pic-basic")) {
    e.target.classList.add("expandimg");
  }

  allImgs.forEach((img) => {
    if (img !== e.target) {
      img.classList.remove("expandimg");
    }
  });
});
