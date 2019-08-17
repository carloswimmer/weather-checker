import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'

import Forecasts from './components/Forecasts'
import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
            <Forecasts />
        </div>
      </Provider>
    )
  }
}
