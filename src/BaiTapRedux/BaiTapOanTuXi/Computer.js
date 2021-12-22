import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
  render() {
    let keyFrame = `@keyframes randomItem${Date.now()}{
      0% {top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0;}
    }`
    return (
      <div className="text-center playerGame">
        <style>
          {keyFrame}
        </style>
        <div className="theThink" style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            className="mt-3"
            width={100}
            height={100}
            style={
              { position: 'absolute',
                left: '30%',
                transform: 'rotate(90deg)',
                animation: `randomItem${Date.now()} .3s`
              }
            }
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img style={{ with: 200, height: 200 }} src="./img/BT_OanTuXi/playerComputer.png" alt="#" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapOanTuXiReducer.computer,
  }
}

export default connect(mapStateToProps, null)(Computer);
