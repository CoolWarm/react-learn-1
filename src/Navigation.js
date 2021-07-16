import React from 'react';
import PropTypes from 'prop-types';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  render() {
    const { pageTitles } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="navigation">
        {
          pageTitles.map((item, index) => {
            return (
              <div key={index}
                className={"tag " + (index === currentIndex ? "active" : "")}
                onClick={e => this.changeIndex(index)}>
                {item}
              </div>
            );
          })
        }
      </div>
    );
  }

  changeIndex(index) {
    this.setState({
      currentIndex: index
    });
    this.props.tagClick(index);
  }
}

Navigation.propTypes = {
  pageTitles: PropTypes.array.isRequired
}