import React, { Component } from 'react'
import './bookingTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe'
import HangGhe from './HangGhe'
import danhSachGheData from '../../Data/danhSachGhe.json'

export default class BaiTapBookingTicket extends Component {

  renderHangGhe = () => {
    return (
      danhSachGheData.map((hangGhe, index) => {
        return (
          <div key={index}>
            <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
          </div>
        )
      })
    )
  }
  render() {
    return (
      <div
        className="bookingMovie"
        style={
          {
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }
        }
      >
        <div
          style={
            {
              position: "fixed",
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.7)',
            }
          }
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning display-4 mt-2">
                  ĐẶT VÉ XEM PHIM CYBERLEARN.VN
                </div>
                <div className="mt-3 text-light" style={{ fontSize: '25px' }}>
                  Màn hình
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <div className="screen mt-2"></div>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className="col-4">
                <div className="text-light mt-3" style={{ fontSize: '35px' }}>
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
