function turnblackwhite(){

}
// Add an event listener to the images with the class "accordion-image"
var images = document.getElementsByClassName("accordion-image");
for (var i = 0; i < images.length; i++) {
images[i].addEventListener("click", toggleImageColor);
}

// Toggle the image between black and white and color
function toggleImageColor(event) {
var bwDiv = event.currentTarget.querySelector(".bw");
var colorDiv = event.currentTarget.querySelector(".color");

  // Toggle the visibility of the black and white and color divs
if (bwDiv.style.display === "none") {
    bwDiv.style.display = "block";
    colorDiv.style.display = "none";
} else {
    bwDiv.style.display = "none";
    colorDiv.style.display = "block";
}
}
