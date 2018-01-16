import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createClue } from '../../actions';

class ClueForm extends Component {
  state = {
    showWordInfo: false,
    showNumberInfo: false,
    fields: { word: '', number: '' }
  };

  wordIsValid(word) {
    return !word.includes(' ');
  }

  numberIsValid(number) {
    return number >= 0 && number <= 9;
  }

  handleSubmit = e => {
    e.preventDefault();
    const { fields } = this.state;
    if (this.numberIsValid(fields.number) && this.wordIsValid(fields.word)) {
      this.props.createClue(fields, this.props.gameId);
      this.setState({
        showWordInfo: false,
        showNumberInfo: false,
        fields: { word: '', number: '' }
      });
    }
  };

  handleWordChange = e => {
    const word = e.target.value;

    if (this.wordIsValid(word)) {
      const newFields = { ...this.state.fields, word };
      this.setState({ fields: newFields });
    } else {
      this.setState({ showWordInfo: true, showNumberInfo: false });
    }
  };

  handleNumberChange = e => {
    const isEmpty = e.target.value === '';
    const number = parseInt(e.target.value, 10);

    if (isEmpty || this.numberIsValid(number)) {
      const newFields = { ...this.state.fields, number };
      this.setState({ fields: newFields });
    } else {
      this.setState({ showNumberInfo: true, showWordInfo: false });
    }
  };

  showInfo() {
    if (this.state.showWordInfo) {
      return (
        <div className="ui ignored message info">
          <div className="header">Clue must be one word</div>
          <p>
            Your clue cannot contain any spaces. You are permitted to use dashes
            for hyphenated words that meet the rules.
          </p>
        </div>
      );
    } else if (this.state.showNumberInfo) {
      return (
        <div className="ui ignored message info">
          <div className="header">Must be a number</div>
          <p>You must enter a number between 0 and 9.</p>
        </div>
      );
    } else {
      return null;
    }
  }

  renderClue() {
    const { clue } = this.props;
    return clue.word ? <h3>{`${clue.word}: ${clue.number}`}</h3> : '--';
  }

  render() {
    const { fields } = this.state;

    return (
      <div className="ClueForm">
        <div className="ui top attached menu">
          <div className="ui item">
            <h4>Give a New Clue</h4>
          </div>
          <div className="right menu">
            <div className="item">Current Clue is:</div>
            <div className="item">{this.renderClue()}</div>
          </div>
        </div>
        <div className="ui attached secondary segment">
          <form onSubmit={this.handleSubmit} className="ui large form">
            <div className="fields">
              <div className="eight wide field">
                <input
                  type="text"
                  onChange={this.handleWordChange}
                  value={fields.word}
                  placeholder="Word"
                />
              </div>

              <div className="three wide field">
                <input
                  type="text"
                  value={isNaN(fields.number) ? '' : fields.number}
                  onChange={this.handleNumberChange}
                  placeholder="Number"
                />
              </div>

              <div className="five wide field">
                <button className="ui large violet button" type="submit">
                  Create Clue
                </button>
              </div>
            </div>
          </form>
          {this.showInfo()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ game }) => {
  return { clue: game.clue, gameId: game.id };
};

export default connect(mapStateToProps, { createClue })(ClueForm);
