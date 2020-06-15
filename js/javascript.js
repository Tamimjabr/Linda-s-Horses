/*two functions for open and close the navigation menu*/
function openNav(){
    document.getElementById("sideMenu").style.width= "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav(){
    document.getElementById("sideMenu").style.width= "0px";
    document.body.style.backgroundColor = "rgba(212, 201, 181,0.6)";
}
/*Slideshow */
/*
var slideIndex=1;
showSlide(slideIndex);
//next and previous function
function plusSlides(n){
    showSlide(slideIndex+=n);
}
function currentSlide(n){
    showSlide(slideIndex=n);
}
function showSlide(n){
    var i;
    var slides=document.getElementsByClassName("mySlides");
var dots=document.getElementsByClassName("dot");
if(n>slides.length){
    slideIndex=1;//show the first slide
}
if(n<1){
    slideIndex=slides.length;
}
//to only show the current image we have to hide the other
for(i=0; i<slides.length;i++){
    slides[i].style.display="none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
} 
dots[slideIndex-1].className += " active";
slides[slideIndex-1].style.display="block";//-1 because the index start from 0

}

*/
//automatic slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;//to change between the pictures
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
 
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}