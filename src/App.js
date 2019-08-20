import React, { Component } from 'react'
import 'typeface-roboto'
import './App.css'
import { Provider } from 'react-redux'
import Content from './components/Content'
import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Content />
        </div>
      </Provider>
    )
  }
}
