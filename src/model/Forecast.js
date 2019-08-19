export default class Forecast {

  constructor(
    monthDay= '',
    date='',
    measures= [],
    number= 0,
    averageTemp= 0
  ) {
      this.monthDay = monthDay;
      this.date = date;
      this.measures = measures;
      this.number = number;
      this.averageTemp = averageTemp;
    }
}
