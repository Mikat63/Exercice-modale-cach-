const showPara = document.querySelector("#show_para_btn");
const paraContainer = document.querySelector("#para_container");

showPara.addEventListener("click", function (event) {
  event.stopPropagation();
  document.body.style.backgroundColor = "dimgray";
  paraContainer.classList.remove("hidden");
  paraContainer.style.backgroundColor = "white";
});

paraContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

document.body.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  paraContainer.classList.add("hidden");
});
