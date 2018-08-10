import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions'

let styles = {
  backgroundColor: '#82bfbe',
  width: '200px',
  height: '50px',
  borderRadius: '5px',
  display: 'block',
  margin: '50px auto',
  fontSize: '18px',
  border: '1px solid ',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: '#4b8281' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={this.props.getNews}
      >Press to see News </button>
    );
  }

};

const mapDispatchToProps = {
  getNews: getNews,
};

Button = connect(
  null,
  mapDispatchToProps,
)(Button);

export default Button;
