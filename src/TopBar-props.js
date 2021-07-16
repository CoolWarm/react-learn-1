import React from "react";

export default class TopBar extends React.Component {
  render() {
    const { left, center, right } = this.props;
    return (
      <div className="topbar">
        <div className="topbar-left">
          {left}
        </div>
        <div className="topbar-center">
          {center}
        </div>
        <div className="topbar-right">
          {right}
        </div>
      </div>
    );
  }
}