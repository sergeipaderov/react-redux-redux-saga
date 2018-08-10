import React from 'react';
import { connect } from 'react-redux'
import img from '../loading_spinner.gif'

let Laoading = ({ loading }) => (

  loading ?
    <div style={{ textAlign: 'center' }}>
      <img src={img} alt='loading' style={{ width: "50px", height: "50px" }} />
      <h1 style={{ fontSize: '18px' }}>LOADING</h1>
    </div> :
    null
);

const mapStateToProps = (state) => ({
  loading: state.loading
})

Laoading = connect(
  mapStateToProps,
  null
)(Laoading)


export default Laoading;


