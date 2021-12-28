import React, { Component } from 'react';
import './BaiTapGameXucXac.css';
import { connect } from 'react-redux';

import XucXac from './XucXac';
import ThongTinTroChoi from './ThongTinTroChoi';

class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div
        className="game"
        style={
          {
            backgroundImage: 'url(./img/BaiTapGameXucXac/bgGame.png)',
            width: '100vw',
            height: '100vh'
          }
        }
      >
        <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', width: '100vw', height: '100vh' }}>
          <h2 className="text-center pt-5 display-4">GAME ĐỔ XÚC XẮC</h2>
          <div className="container mt-5">
            <div className="row text-center">
              <div className="col-4">
                <button className="btnGame" onClick={() => { this.props.datCuoc(true) }}>TÀI</button>
              </div>
              <div className="col-4">
                <XucXac />
              </div>
              <div className="col-4">
                <button className="btnGame" onClick={() => { this.props.datCuoc(false) }}>XỈU</button>
              </div>
            </div>
            <div className="text-center">
              <ThongTinTroChoi />
            </div>
            <div className="text-center mt-4">
              <button
                onClick = {()=> {this.props.choiGame()}}
                className="btn btn-success"
                style={{ width: '180px', height: '60px', fontSize: '25px' }}
              >
                Play Game
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    datCuoc: (datCuoc) => {
      dispatch({
        type: 'DAT_CUOC',
        datCuoc
      })
    },
    choiGame: () => {
      dispatch({
        type: 'CHOI_GAME',
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(BaiTapGameXucXac)