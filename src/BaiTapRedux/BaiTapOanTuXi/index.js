import React, { Component } from 'react'
import './index.css';
import Player from './Player';
import Computer from './Computer'
import Result from './Result';
import { connect } from 'react-redux';
class BaiTapOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className='row text-center mt-5'>
          <div className='col-4 mt-3'>
            <Player/>
          </div>
          <div className='col-4 mt-3'>
            <Result/>
            <button
              className="btn btn-success p-2 mt-5 display-4"
              onClick = {this.props.playGame}
            >
              Play game
            </button>
          </div>
          <div className='col-4 mt-3'>
            <Computer/>
          </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    playGame: () => {
      let count = 0;
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: 'RAN_DOM'
        })
        count++;
        if (count > 10){
          clearInterval(randomComputerItem);
          dispatch({
            type: 'END_GAME'
          })
        }
      }, 100)
    }
  }
}

export default connect(null,mapDispatchToProps) (BaiTapOanTuXi);