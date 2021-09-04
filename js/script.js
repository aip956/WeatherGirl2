
const $currtemp = $('#currtemp');
const $currindex = $('#currindex');
const $currdesc = $('#currdesc');
const $input = $('input[type="text"]');
const $histtempmax = $('#histtempmax');
const $histtempmin = $('#histtempmin');
const $histdesc = $('#histdesc');
const $dateinput = $('input[type="date"]');
const $futuretempmax = $('#futuretempmax');
const $futuretempmin = $('#futuretempmin');
const $futureindex = $('#futureindex');
const $futuredesc = $('#futuredesc');
const $inputdate = $('input[type="date"]');
const $dateval=$('#dateval');

const yesterday = () => {
  let d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
};


// Current weather
function handleGetData(event) {
  event.preventDefault();
  
  if (!$input.val()){
    alert ("Please enter a city")
  }

$.ajax({
    url:`http://api.weatherapi.com/v1/current.json?key=94b59f94d0124a6cbe831027212608&q=${$input.val()}&aqi=no`
}).then(
   function(data){
   console.log(data);
   $currtemp.text(data.current.temp_f);
   $currindex.text(data.current.feelslike_f);
   $currdesc.text(data.current.condition.text);
   },
   
   function(error){
    console.log("oops, something didn't work", error);
  }
)
$.ajax({
  url:`http://api.weatherapi.com/v1/forecast.json?key=94b59f94d0124a6cbe831027212608&q=${$input.val()}&days=5&aqi=no&alerts=no`
}).then(
 function(data){
 console.log(data);
 $futuretempmax.text(data.forecast.forecastday[1].day.maxtemp_f);
 $futuretempmin.text(data.forecast.forecastday[1].day.mintemp_f);
 $futureindex.text(data.forecast.forecastday[1].hour[0].feelslike_f);
 $futuredesc.text(data.forecast.forecastday[1].day.condition.text);
 },
 
 function(error){
  console.log("oops, something didn't work", error);
}
)
;}
// Add event listener when clicked, run handleGetData
    $('form').on('submit',handleGetData)
   
    $dateval.on("click", handleGetDate) 
    // When clicked, run handleGetDate

// Historical weather
// http://api.weatherapi.com/v1/history.json?key=94b59f94d0124a6cbe831027212608&q=dallas&dt=2021-09-02


 

function handleGetDate(event) {
  event.preventDefault();

  if (!$input.val()) {
    alert ("Please enter a city on the next slide and submit")
  }

  if (!$inputdate.val()) {
    alert ("Please enter a date and submit")
  }

  $.ajax({
    url:`http://api.weatherapi.com/v1/history.json?key=94b59f94d0124a6cbe831027212608&q=${$input.val()}&dt=${$inputdate.val()}`
  }).then(
   function(data){
   console.log(data);
   $histtempmax.text(data.forecast.forecastday[0].day.maxtemp_f);
   $histtempmin.text(data.forecast.forecastday[0].day.mintemp_f);
   $histdesc.text(data.forecast.forecastday[0].day.condition.text);
   },
   
   function(error){
    console.log("oops, something didn't work", error);
  }
  )
}


// Forecast

/////////////////////////////////////////////////////////


// Carousel Functions

// 

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
