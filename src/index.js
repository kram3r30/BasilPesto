import { random } from "./modules/utils.js";
import { showPopover } from "./modules/modal.js";
import { basilChefs, basilTexture } from "./modules/chefs.js";
import { getQuote } from "./modules/api.js";

const API = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
const el = document.querySelector("h2");
const recipeName = `${random(basilChefs)}'s ${random(basilTexture)} pesto`;

getQuote(API, ".quote");
el.innerHTML = recipeName;

document.addEventListener("click", showPopover);
