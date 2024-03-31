const scriptURL = "https://script.google.com/macros/s/AKfycbx8g9hK7v-MPo8Wmdb7EcWlNB3YqKFTPHwKu30aXG0AYjpEYPWQbDMbi60OPNVCTFQL8Q/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You for Subscribing!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
