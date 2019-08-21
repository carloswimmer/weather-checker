# Weather Checker
Test task to apply to front-end job.

## Description
This is a job test coded using React with Redux, taking advantage of component layout of Material-ui, and tested using Jest.
It's a simple screen, with a loader screen on fetch time, where the user can see a card with average temperature of today. The same for the next four days (sometimes five days, depending on the time) shown in groups of 3 cards that will change when user clicks on aside buttons. Still on this screen, there is a chart with different measures of the day (with intervals of 3 hours) that will change when the user clicks on day cards. All temperature information is shown in Celsius degrees, but clicking on a switch button on top right corner, everything is presented in Fahrenheit degrees. 


### Weather forecast end-point

#### Celcius
http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&units=metric&APPID=${id}&cnt=40

#### Farenheit
http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&units=imperial&APPID=${id}&cnt=40

### Weather icons
http://openweathermap.org/img/wn/10d@2x.png
