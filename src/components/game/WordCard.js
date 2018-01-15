import React, { Component } from 'react';

class WordCard extends Component {
  state = { hovering: false, updated: false };

  componentWillReceiveProps(nextProps) {
    if (nextProps.card.known !== this.props.card.known) {
      this.handleTransition();
    }
  }

  handleTransition() {
    this.setState({ updated: true });
    setTimeout(() => this.setState({ updated: false }), 1250);
  }

  handleMouseEnter = () => {
    this.setState({ hovering: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovering: false });
  };

  renderIdentity() {
    const { card } = this.props;

    switch (card.identity) {
      case 'innocent_bystander':
        return (
          <div className="center aligned">
            <span className="shrug">¯\_(ツ)_/¯</span>
          </div>
        );
      default:
        return null;
    }
  }

  renderKnownCard(cssClass) {
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        className={cssClass}
      >
        <div className="content known">
          {this.state.hovering ? (
            <span className="center aligned revealed-word">
              {this.props.card.word}
            </span>
          ) : (
            this.renderIdentity()
          )}
        </div>
      </div>
    );
  }

  renderUnknownCard(cssClass) {
    const { revealIdentity, card } = this.props;
    const clickHandler = revealIdentity
      ? revealIdentity.bind(null, card.word, card.id)
      : null;

    return (
      <div onClick={clickHandler} className={cssClass}>
        <div className="content">
          <span className="center aligned word">{card.word}</span>
        </div>
      </div>
    );
  }

  render() {
    const { identity, card } = this.props;
    const cardClass = identity
      ? `ui card word-card ${identity}`
      : `ui card word-card`;
    return (
      <div
        className={`cell ${this.state.updated
          ? `updated ${card.identity}`
          : null}`}
      >
        {card.known
          ? this.renderKnownCard(cardClass)
          : this.renderUnknownCard(cardClass)}
      </div>
    );
  }
}

export default WordCard;
