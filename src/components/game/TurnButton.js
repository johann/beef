import React, { Component } from 'react';

export default class extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState(prevState => {
      return { clicked: !prevState.clicked };
    });
  };

  render() {
    return this.state.clicked ? (
      [
        <div key="confirmation text" className="item">
          <h3 className="content">Are you sure?</h3>
        </div>,
        <div key="confirmation buttons" className="item">
          <div className="ui large buttons">
            <div
              onClick={() => {
                alert(
                  'this doesnt do anything rn :) the next player should just go'
                );
              }}
              className="ui large violet button"
            >
              End Turn
            </div>
            <div
              onClick={this.handleClick}
              className="ui large basic red button"
            >
              Cancel
            </div>
          </div>
        </div>
      ]
    ) : (
      <div className="item">
        <div onClick={this.handleClick} className="ui large violet button">
          End Current Turn
        </div>
      </div>
    );
  }
}
