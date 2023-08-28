const shareButton = document.querySelector(".share__button");
const shareSection = document.querySelector(".share__toggle");

shareButton.addEventListener("click", (event) => {
  //   Toggle attribute of data-visibility
  shareSection.classList.toggle("hidden");
});
