import React from "react";

export default class TopBar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <div className="topbar-left">
          {this.props.children[0]}
        </div>
        <div className="topbar-center">
          {this.props.children[1]}
        </div>
        <div className="topbar-right">
          {this.props.children[2]}
        </div>
      </div>
    );
  }
}