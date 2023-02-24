export function getQuote(api, element) {
  fetch(api)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector(element).innerText = data[0];
    });
}
