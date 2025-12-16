let h1 = document.querySelector("h1");
//
window.addEventListener("keydown", function (type) {
  console.log(type.key);
  if (type.key == " ") {
    h1.textContent = "space";
  } else {
    h1.textContent = type.key;
  }
});
