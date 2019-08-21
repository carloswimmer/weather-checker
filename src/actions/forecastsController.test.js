import { forecastsController } from "./forecastsController"
import { forecasts, groupedByDay } from "../mock/forecasts"

it('manipulates fetched response', () => {
  expect(forecastsController(forecasts)).toEqual(groupedByDay)
})

