

Create basic function
API from Weather API
Current endpoint: Works; checked in ajax and live server
History endpoint: Works
Future endpoint: Works

Landing page has present weather
video background
Nice font: Raleway
Add city in center page? Carries to other pages?
Display temp, feels like, conditions, icon

Carousel: Scroll left to Weather in the Past, Weather presently, scroll right to Weather in the future
Mostly taken from: https://www.youtube.com/watch?v=gor5BvT2z88

Scroll left for historical forecast:
Enter days? or pick date?
Displays max and min temps, conditions, icon

Scroll right for future forecast:
Enter days (or date?)
Displays max and min temps, conditions, icon

Friday: Watch youtube video on creating carousel pages
Research adding video to background
Select videos




create index.html
Body: 
div class="carousel"
div class="carousel_item"
<img src="image1">
div class="carousel_item"
<img src="image2">
div class="carousel_item"
<img src="image3">

div class="carousel_actions"
button id="Next", next slide, aria label
button id="Previous", previous slide

script src=app.js

In CSS
.carousel {
    overflow: hidden;
    max-width: 1000px or 600px
    position: relative;
}

.carousel .carousel_item,
.carousel .carousel_item_hidden{
    display: none;
}

.carousel .carousel_item img {
      width: 100%
      max-width: 600px;
    height: auto;
}

.carousel .carousel_item_visible {
    display: block;
}

//actions
.carousel .carousel_actions {
    display: flex
    width: 100%
    justify-content: space-between
    position: absolute;
    top: 50%
    transform: translateY(-50%)
} 

.carousel .carousel_actions button {
    border-radius: 50px;
    border: 0;
    font-weight: bold;
    cursor: pointer;
    width: 40px;
    height: 40px;
}

.carousel .carousel_actions button#carousel_button_prev {
    margin-left: 20px
}

.carousel .carousel_actions button#carousel_button_next {
    margin-left: 20px
}

In JS
let slidePosition=0;
const slides = document.getelementbyclassnyame("carousel_item")
const totalslides = slides.length


document.getelementbyid("carousel_button-next")
.addeventlistner("click",function(){
    updateSlidePosition()
})