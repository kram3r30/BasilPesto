var modalOuter = document.querySelector(".modal-outer");
var modalInner = document.querySelector(".modal");

var betaContent = `
<h3>Oooops!</h3>
<p>Wow! Nothing works!<p>
`;
var buttonContent = `
<h2>Coming Soon</h2>
<p>This feature coming soon.<p>
<a class="closer" href="#0">✖︎</a>
`;

export function showPopover(event) {
  if (event.target.matches(".beta")) {
    modalInner.innerHTML = betaContent;
    modalOuter.classList.add("open");
  } else if (event.target.closest("nav ul")) {
    modalInner.innerHTML = buttonContent;
    modalOuter.classList.add("open");
  } else if (event.target.matches(".closer, .modal-outer")) {
    modalOuter.classList.remove("open");
  } else return;
  event.preventDefault();
}
document.addEventListener("click", showPopover);
