var modal = document.querySelector(".modal");
var modalOuter = document.querySelector(".modal-outer");

export function showPopover(event) {
  if (!event.target.matches(".beta, .closer")) return;
  modalOuter.classList.toggle("open");
  event.preventDefault();
}
