# Weather Checker
Test task to apply to front-end job.

## Description
This is a job test coded using **React with Redux**, taking advantage of component layout of **Material-ui**, and tested using Jest.
It's a simple screen, with a loader screen on fetch time, where the user can see a card with average temperature of today. 
The same for the next 4 days (sometimes 5 days, depending on the time) shown in groups of 3 cards that will change when user clicks on aside buttons. 
Still on this screen, there is a chart with different measures of the day (intervals of 3 hours) that will change when the user clicks on day cards. 
All temperature information is shown in Celsius degrees, but clicking on a switch button on top right corner, everything is presented in Fahrenheit degrees. 
See some prints above:

### In Celsius degrees
![screen with celsius degrees](https://raw.githubusercontent.com/carloswimmer/weather-checker/master/screen_shots/celsius.png) 

### In Fahrenheits
![screen with fahrenheit degrees](https://raw.githubusercontent.com/carloswimmer/weather-checker/master/screen_shots/fahrenheit.png) 

### Loader screen
![screen while loading data](https://raw.githubusercontent.com/carloswimmer/weather-checker/master/screen_shots/loader.png) 

### Design concept
The main idea is to immediately communicate how the weather is (or will be) just with the background image, using physical sensation as information. The bright colors were chosen to balance the "not so bright" sensation of some cloudy and rainy days. The goal here is to keep the user state of equilibrium and satisfaction in a high level.

## Future improvements
Some plans had to be left for next version (yes, life demands choices):
* smooth transitions between screen changes
* fluid transform size on bar charts when user change day details
* carrousel movement on card changes
* hide id API into path variable stored on server, to be included only on build stage

### Weather forecast end-point

#### Celcius
http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&units=metric&APPID=${id}&cnt=40

#### Farenheit
http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&units=imperial&APPID=${id}&cnt=40

### Weather icons
http://openweathermap.org/img/wn/10d@2x.png
