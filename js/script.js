
// const $currtemp = $('#currtemp');
// const $currindex = $('#currindex');
// const $currdesc = $('#currdesc');
// const $input = $('input[type="text"]');
// const $histtempmax = $('#histtempmax');
// const $histtempmin = $('#histtempmin');
// const $histdesc = $('#histdesc');
// const $dateinput = $('input[type="date"]');
// const $futuretempmax = $('#futuretempmax');
// const $futuretempmin = $('#futuretempmin');
// const $futureindex = $('#futureindex');
// const $futuredesc = $('#futuredesc');
// const $inputdate = $('input[type="date"]');




// Current weather
// $.ajax({
//     url:`http://api.weatherapi.com/v1/current.json?key=94b59f94d0124a6cbe831027212608&q=New York&aqi=no`
// }).then(
//    function(data){
//    console.log(data);
//    $currtemp.text(data.current.temp_f);
//    $currindex.text(data.current.feelslike_f);
//    $currdesc.text(data.current.condition.text);
//    },
   
//    function(error){
//     console.log("oops, something didn't work", error);
//   }
// )

   
// Historical weather

// $.ajax({
//   url:`http://api.weatherapi.com/v1/history.json?key=94b59f94d0124a6cbe831027212608&q=New York&dt=2021-08-22`
// }).then(
//  function(data){
//  console.log(data);
//  $histtempmax.text(data.forecast.forecastday[0].day.maxtemp_f);
//  $histtempmin.text(data.forecast.forecastday[0].day.mintemp_f);
//  $histdesc.text(data.forecast.forecastday[0].day.condition.text);
//  },
 
//  function(error){
//   console.log("oops, something didn't work", error);
// }
// )

// Forecast
// $.ajax({
//   url:`http://api.weatherapi.com/v1/forecast.json?key=94b59f94d0124a6cbe831027212608&q=New%20York&days=5&aqi=no&alerts=no`
// }).then(
//  function(data){
//  console.log(data);
//  $futuretempmax.text(data.forecast.forecastday[0].day.maxtemp_f);
//  $futuretempmin.text(data.forecast.forecastday[0].day.mintemp_f);
//  $futureindex.text(data.forecast.forecastday[0].hour[0].feelslike_f);
//  $futuredesc.text(data.forecast.forecastday[0].day.condition.text);
//  },
 
//  function(error){
//   console.log("oops, something didn't work", error);
// }
// )
/////////////////////////////////////////////////////////


// Carousel Functions
// let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
// let i=1;
// let slides = document.getElementsByClassName("mySlides");
// let dots = document.getElementsByClassName("dot")
// if (n > slides.length) {slideIndex = 1}
// if (n < 1) {slideIndex = slides.length}
// for (i = 0; i < slides.length; i++) {
//   slides[i].getElementsByClassName.display = "none";
// }
// for (i = 0; i < dots.length; i++) {
//   dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }



let slidePosition = 0;
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

console.log(totalSlides);

document. getElementById("carousel_button--next")
.addEventListener("click",function(){
  moveToNextSlide();
})

document. getElementById("carousel_button--prev")
.addEventListener("click",function(){
  moveToPrevSlide();
})

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel_item--visible");
    slide.classList.add("carousel_item--hidden");
  }

  slides[slidePosition].classList.add('carousel_item--visible');
}


function moveToNextSlide() {
      if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else{
    slidePosition++;
  } 
  updateSlidePosition();
}


function moveToPrevSlide() {
    if (slidePosition === 0) {
  slidePosition = totalSlides - 1;
} else{
  slidePosition--;
} 
updateSlidePosition();
}





//  $temp.text(data.forecast.forecastday[0].day.maxtemp_f)
//    $temp.text(data.forecast.forecastday[0].day.maxtemp_f)
//    $index.text(data.current.feelslike_f);
//    weatherData = data;
//    render();
