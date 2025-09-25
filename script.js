
let sizechart = document.querySelector(".sizechart");
let popupOverlay = document.getElementById("popupOverlay");

sizechart.addEventListener("click", function() {
  popupOverlay.style.display = "flex";
});

// close popup when clicking anywhere on overlay :P
popupOverlay.addEventListener("click", function() {
  popupOverlay.style.display = "none";
});