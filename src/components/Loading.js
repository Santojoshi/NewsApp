import React, { Component } from 'react'
import gloading from './gloading.gif'

export default class loading extends Component {
  render() {
    return (
      <div>
        <img src={gloading} alt="" />
      </div>
    )
  }
}
