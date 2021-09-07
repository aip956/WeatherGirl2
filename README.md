I had trouble with my git repository, so there are two repos. There is also a gap in saving my work to my repo. I had intended originally for my backgrounds to be mp4s, but these were too large. I had deployed to my original git "WeatherGirl". As I added more functionality, I was unable to save my work. I deleted the mp4 files from my VS Code, but the repository already had the mp4s and would not save my work. Alex recommended I create another repo, and it's now WeatherGirl2.

Current: http://api.weatherapi.com/v1/current.json?key=94b59f94d0124a6cbe831027212608&q=New York&aqi=no
Forecast: http://api.weatherapi.com/v1/forecast.json?key=94b59f94d0124a6cbe831027212608&q=New York&days=5&aqi=no&alerts=no
History: http://api.weatherapi.com/v1/history.json?key=94b59f94d0124a6cbe831027212608&q=New York&dt=2021-08-22


To do:
Create basic function
API from Weather API
Current endpoint: Works; checked in ajax and live server
History endpoint: Works
Future endpoint: Works

Landing page has present weather
video background --> Could not save with mp4s, so needed to use jpegs
Nice font: Raleway
Add city in center page? Carries to other pages?
Display temp, feels like, conditions
Button styling from W3schools.com (hover and transition)


Scroll left for historical forecast:
Enter date
Displays max and min temps, conditions

Scroll right for future forecast:
Use one day future forecast
Displays max and min temps, conditions

Friday: Watch youtube video on creating carousel pages
Research adding video to background
Select videos

Carousels: https://www.youtube.com/watch?v=gor5BvT2z88&t=165s

For carousel input:
In HTML:
Create div classes:
Carousel
Carousel_item (for each slide)
Carousel_item—visible (for the slide that’s visible)
Carousel_actions (for the prev and next buttons)


In JS:
Constants slidePosition, slides, and totalSlides
Event listener on the next button, calls function moveToNextSlide;
Event listener on the prev button, calls function moveToPrevSlide;
Function updateSlidePosition: for each slide, remove the visible slide, add hidden
Function moveToNextSlide: 
if slidePosition is (totalSlides - 1), slidePosition is 0; 
else slidePosition add 1, updateSlidePosition
Function moveToPrevSlide: 
if slidePosition is 0, slidePosition is (totalSlides - 1); 
else slidePosition minus 1, updateSlidePosition

In CSS:
.carousel
.carousel_item: display: none
.carousel_item—hidden: display: none
.carousel_item—visible: fade animation
animation: fadeVisbility
