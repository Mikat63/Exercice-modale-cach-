const showPara = document.querySelector("#show_para_btn");
const paraContainer = document.querySelector("#para_container");

showPara.addEventListener("click", function (event) {
  event.stopPropagation();
  document.body.classList.remove("bg-white");
  document.body.classList.add("bg-gray-500");
  paraContainer.classList.remove("hidden");
});

paraContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

document.addEventListener("click", function () {
  document.body.classList.remove("bg-gray-500");
  document.body.classList.add("bg-white");
  paraContainer.classList.add("hidden");
});
