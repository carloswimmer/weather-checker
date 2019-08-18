import React, { Component } from 'react'
import 'typeface-roboto'
import './App.css'
import { Provider } from 'react-redux'

import Header from './components/Header'
import Forecasts from './components/Forecasts'
import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Forecasts />
        </div>
      </Provider>
    )
  }
}
