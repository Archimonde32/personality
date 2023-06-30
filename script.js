
// const images = document.getElementsByClassName("accordion-image");
// for (var i = 0; i < images.length; i++) {
// images[i].addEventListener("click", toggleImageColor);
// }


// function toggleImageColor(event) {
// const bwDiv = event.currentTarget.querySelector(".bw");
// const colorDiv = event.currentTarget.querySelector(".color");


// if (bwDiv.style.display === "none") {
//     bwDiv.style.display = "block";
//     colorDiv.style.display = "none";
// } else {
//     bwDiv.style.display = "none";
//     colorDiv.style.display = "block";
// }
// }
var accordionImages = document.getElementsByClassName("accordion-image");
var accordionContents = document.getElementsByClassName("accordion-content");

for (var i = 0; i < accordionImages.length; i++) {
  accordionImages[i].addEventListener("click", toggleAccordion);
}

function toggleAccordion(event) {
  var listItem = event.currentTarget.parentNode;
  var accordionContent = listItem.querySelector(".accordion-content");
  
  if (listItem.classList.contains("active")) {
    listItem.classList.remove("active");
    accordionContent.style.display = "none";
  } else {
    closeAllAccordions();
    listItem.classList.add("active");
    accordionContent.style.display = "block";
  }
}

function closeAllAccordions() {
  for (var i = 0; i < accordionContents.length; i++) {
    accordionContents[i].style.display = "none";
    accordionContents[i].parentNode.classList.remove("active");
  }
}
