import React, { Component } from 'react';
import dataGlasses from '../Data/dataGlasses.json';

export default class BaiTapThuKinh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glassImg: './img/BaiTapThuKinh/v1.png',
      glassInfo: {
        "price": 30,
        "name": "GUCCI G8850U",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
      }
    }
  }
  renderListGlasses() {
    return dataGlasses.map((glassItem, index) => {
      return (
        <img
          key={index}
          src={glassItem.url}
          alt={glassItem.url}
          className="ml-2 p-2 border border-width-1"
          onClick={() => { this.handleOnClick(glassItem) }}
          style={
            {
              width: '110px',
              cursor: 'pointer',
            }
          }
        />
      )
    })
  }
  handleOnClick(glassItem) {
    this.setState({
      glassImg: glassItem.url,
      glassInfo: {
        "price": glassItem.price,
        "name": glassItem.name,
        "desc": glassItem.desc
      }
    })
  }
  render() {
    const { glassImg, glassInfo } = this.state;
    const keyFrame =
      `@keyframes glassesChangeAnimation${Date.now()} {
      from{
        width:0;
        transform: rotate(45deg);
        opacity: 0;
      }
      to {
        with: 150px;
        transform: rotate(0deg);
        opacity: 0.7;
      }
    }`
    const styleGlasses = {
      width: '150px',
      top: '75px',
      right: '70px',
      opacity: '0.7',
      animation: `glassesChangeAnimation${Date.now()} 1s`
    }
    const styleGlassesInfo = {
      width: '250px',
      left: '50%',
      top: '65%',
      backgroundColor: 'rgba(255,127,0, 0.5)',
      textAlign: 'left',
      paddingLeft: '15px',
      height: '106px',
      borderRadius: '0 0 10px 10px'
    }
    return (
      <div style={
        {
          backgroundImage: 'url(./img/BaiTapThuKinh/background.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100vw',
          height: '100vh',
        }
      }>
        <style>
          {keyFrame}
        </style>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.7)', height: '100vh', }}>
          <h3
            className="text-center text-light p-5"
            style={{
              backgroundColor: 'rgba(10,0,0,0.3)'
            }}
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative" style={{ height: '100%' }}>
                  <img className="position-absolute" src="./img/BaiTapThuKinh/model.jpg" alt="model.jpg" style={{ width: '250px', borderRadius: '10px' }} />
                  <img className="position-absolute" src={glassImg} alt={glassImg} style={styleGlasses} />
                  <div className="position-relative" style={styleGlassesInfo}>
                    <p className="font-weight-bold m-0" style={{ color: '#338f47', fontSize: '17px' }}>Glass Name: {glassInfo.name}</p>
                    {/* <span style={{ fontSize: '13px', fontWeight: '400' }}>Giá: {glassInfo.price}$</span> */}
                    <span className="text-info" style={{ fontSize: '13px', fontWeight: '400' }}>
                      Description:
                      <span className="text-light pl-1">{glassInfo.desc}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img src="./img/BaiTapThuKinh/model.jpg" alt="model.jpg" style={{ width: '250px', borderRadius: '10px' }} />
              </div>
            </div>
          </div>
          {/* Render List glasses */}
          <div className="container bg-light text-center mt-5 d-flex justify-content-center">
            {this.renderListGlasses()}
          </div>
        </div>
      </div>
    )
  }
}
