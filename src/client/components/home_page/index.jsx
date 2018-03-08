import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTime } from '../../actions';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.setTime();
  }

  handleClick(event) {
    this.props.setTime();
  }

  render() {
    return (
      <div>
        <div className='text'>
          The current time is { this.props.time.currentTime }
        </div>
        <button type='button' className='text' onClick={this.handleClick}>Get Current Time</button>
      </div>
    );
  };
}

function mapStateToProps({ time }) {
  return { time };
}

export default connect(mapStateToProps, { setTime })(HomePage);
