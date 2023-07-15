"use strict";

// Variables
const navBtn = document.getElementById("nav-toggle");
const dropdownOne = document.getElementById("programs");
const dropdownTwo = document.getElementById("contact");
const programs = document.getElementById("programs");
const contact = document.getElementById("contact");
const search = document.querySelector(".search-image");
const searchInput = document.querySelector(".search-input");

// hidden elements
const navbar = document.querySelector(".navbar");
const dropdownContentOne = document.querySelector(".dropdown-content-one");
const dropdownContentTwo = document.querySelector(".dropdown-content-two");

//Adding event listeners
navBtn.addEventListener("click", function (event) {
  event.preventDefault;
  navbar.classList.toggle("hidden");
});

dropdownOne.addEventListener("click", function (event) {
  event.preventDefault;
  dropdownContentOne.classList.toggle("hidden");
});

dropdownTwo.addEventListener("click", function (event) {
  event.preventDefault;
  dropdownContentTwo.classList.toggle("hidden");
});

search.addEventListener("click", function () {
  searchInput.classList.toggle("hidden");
});
