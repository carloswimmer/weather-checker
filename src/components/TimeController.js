import React, { Component } from 'react'
import Button from './Button'

export default class TimeController extends Component {
  render() {
    const increment = this.props.increment
    return (
      <div>
        <Button direction={increment}/>
      </div>
    )
  }
}
