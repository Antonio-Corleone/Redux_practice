import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThongTinTroChoi extends Component {
  render() {
    const { datCuoc, soLanThang, soLanChoi } = this.props;
    return (
      <div>
        <div className="display-4">
          BẠN CHỌN:
          <span className="text-danger ml-3">{datCuoc ? 'TÀI' : 'XỈU'}</span>
        </div>
        <div className="display-4">
          BÀN THẮNG:
          <span className="text-success ml-3">{soLanThang}</span>
        </div>
        <div className="display-4">
          TỔNG SỐ BÀN CHƠI:
          <span className="text-primary ml-3">{soLanChoi}</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    datCuoc: state.GameXucXacReducer.datCuoc,
    soLanThang: state.GameXucXacReducer.soLanThang,
    soLanChoi: state.GameXucXacReducer.soLanChoi,
  }
}

export default connect(mapStateToProps)(ThongTinTroChoi)
