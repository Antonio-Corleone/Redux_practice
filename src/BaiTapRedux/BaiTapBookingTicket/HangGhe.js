import React, { Component } from 'react';
import { connect } from 'react-redux';
import { datGheAction } from '../../redux/actions/BookingTicketActions'
class HangGhe extends Component {
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-4">
          {this.props.hangGhe.hang} {this.renderSoHangGhe()}
        </div>
      )
    } else {
      return (
        <div>
          {this.props.hangGhe.hang} {this.renderGhe()}
        </div>
      )
    }
  }
  renderSoHangGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button className="rowNumber" key={index}>
          {hang.soGhe}
        </button>
      )
    })
  }
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = '';
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon'
        disabled = true;
      }
      let cssGheDangDat = '';
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
      if (indexGheDangDat !== -1) {
        cssGheDangDat = 'gheDangChon'
      }
      return (
        <button
          key={index}
          onClick={() => {this.props.datGhe(ghe)}}
          disabled={disabled} 
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} 
        >
          {ghe.soGhe}
        </button>
      )
    })
  }
  render() {
    return (
      <div className="text-light text-left ml-5 mt-1" style={{ fontSize: '30px' }}>
        {this.renderHangGhe()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BookingTicketReducer.danhSachGheDangDat
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: ghe => {
      dispatch(datGheAction(ghe))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (HangGhe);
