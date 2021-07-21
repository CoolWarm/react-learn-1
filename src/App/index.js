import React from "react";

import "./style.css";

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <h2 className="heading">Heading</h2>
        <p style={{color: "green", fontSize: "20px"}}>paragraph</p>
      </>
    );
  }
}