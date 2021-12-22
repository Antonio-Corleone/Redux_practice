import React, { Component } from 'react'
import { connect } from 'react-redux'
class Player extends Component {
  render() {
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img 
            className="mt-3" 
            width={100} 
            height={100} 
            style={{ transform: 'rotate(90deg)' }} 
            src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh} 
            alt={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img 
          style={{ with: 200, height: 200 }} 
          src="./img/BT_OanTuXi/player.png" 
          alt="./img/BT_OanTuXi/player.png" 
        />
        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            let border = {};
            if (item.datCuoc){
              border = {border: '3px solid orange'};
            }

            return (
              <div className="col-4" key={index}>
                <button 
                  style={border} 
                  className="btnItem"
                  onClick = {() => {this.props.datCuoc(item.id)}}
                >
                  <img 
                    width={50} 
                    height={50} 
                    src={item.hinhAnh} 
                    alt="bao.png" 
                  />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_BAO_BUA_KEO",
        maCuoc
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player);