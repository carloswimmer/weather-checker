export default class Measure {

  constructor(
    hour= '',
    mainTemp= 0,
    weatherIcon= '',
    windSpeed= 0,
    mainDescription=''
  ) {
      this.hour = hour;
      this.mainTemp = mainTemp;
      this.weatherIcon = weatherIcon;
      this.windSpeed = windSpeed;
      this.mainDescription = mainDescription;
    }
}
