let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

const handleLink = (tabName) => {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
};

// media sections

let sideMenu = document.getElementById("sidemenu");

const openMenu = () => {
  sideMenu.style.right = "0";
};
const closeMenu = () => {
  sideMenu.style.right = "-200px";
};

// contact-form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwouCcJbvpfvNdJoQLuYuprd7FhCerUCW-GtJxYur65fbVhfDAwGKZ1sipX4SmeAmdS/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "message sent successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
