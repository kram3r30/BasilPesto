(function () {
  'use strict';

  function random(array) {
    const max = array.length;
    const randomIndex = Math.floor(Math.random() * max);
    return array[randomIndex];
  }

  document.querySelector(".modal");
  var modalOuter = document.querySelector(".modal-outer");

  function showPopover(event) {
    if (!event.target.matches(".beta, .closer")) return;
    modalOuter.classList.toggle("open");
    event.preventDefault();
  }

  const basilChefs = ["mama", "papa", "baby"];
  const basilTexture = ["greasy", "frozen", "spicy"];

  function getQuote(api, element) {
    fetch(api)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        document.querySelector(element).innerText = data[0];
      });
  }

  const API = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
  const el = document.querySelector("h2");
  const recipeName = `${random(basilChefs)}'s ${random(basilTexture)} pesto`;

  getQuote(API, ".quote");
  el.innerHTML = recipeName;

  document.addEventListener("click", showPopover);

})();
