import React, { Component } from 'react';
import { connect } from 'react-redux';

class XucXac extends Component {
  renderMangXucXac = () => {
    return this.props.mangXucXac.map((xucxac, index) =>{
      return (
        <img
          key={index}
          className="ml-2" 
          src={xucxac.hinhAnh} 
          alt={xucxac.hinhAnh} 
          style={{ width: '50px', height: '50px' }} 
        />
      )
    })
  }
  render() {
    return (
      <div>
        {this.renderMangXucXac()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mangXucXac: state.GameXucXacReducer.mangXucXac
  }
}

export default connect(mapStateToProps) (XucXac);