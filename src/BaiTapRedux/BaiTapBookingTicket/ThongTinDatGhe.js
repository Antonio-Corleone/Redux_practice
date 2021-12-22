import React, { Component } from 'react';
import { connect } from 'react-redux';
import { huyGheAction } from '../../redux/actions/BookingTicketActions'

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light" style={{ fontSize: '30px' }}>ghế đã đặt</span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-light" style={{ fontSize: '30px' }}>ghế đang đặt</span>
          <br />
          <button className="ghe" style={{ marginLeft: '0' }}></button>
          <span className="text-light" style={{ fontSize: '30px' }}>ghế chưa đặt</span>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr>
                <th style={{ fontSize: '25px' }} className="text-light">Số ghế</th>
                <th style={{ fontSize: '25px' }} className="text-light">Giá</th>
                <th style={{ fontSize: '25px' }} className="text-light">Hủy</th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhSachGheDangDat.map((gheDangDat,index) =>{
                return (
                  <tr key={index}>
                    <th>{gheDangDat.soGhe}</th>
                    <th>{gheDangDat.gia.toLocaleString()}</th>
                    <th>
                      <button
                        className="text-light"
                        style = {{backgroundColor: 'transparent', border: 'none'}}
                        onClick = {() => this.props.dispatch(huyGheAction(gheDangDat.soGhe))}
                      >
                        X
                      </button>
                    </th>
                  </tr>
                )
              })}
            </tbody>
            <tfoot className="text-warning">
              <tr>
                <td></td>
                <td>Tổng tiền</td>
                <td>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat) => tongTien+= gheDangDat.gia,0).toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    danhSachGheDangDat: state.BookingTicketReducer.danhSachGheDangDat
  }
}

export default connect(mapStateToProps)(ThongTinDatGhe)
