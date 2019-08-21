import { forecastsController, dateFormatter, simplify } from "./forecastsController"
import { forecasts, groupedByDay, simplifiedForecasts } from "../mock/forecasts"

it('manipulates fetched response', () => {
  expect(forecastsController(forecasts)).toEqual(groupedByDay)
})

it('simplify response', () => {
  expect(simplify(forecasts)).toEqual(simplifiedForecasts)
})

it('changes date format', () => {
  expect(dateFormatter('2019-08-21 00:00:00')).toEqual('21 Aug 2019')
})

