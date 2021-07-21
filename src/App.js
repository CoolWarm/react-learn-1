import React from "react";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      headColor: "brown"
    }
  }
  render() {
    const headStyle = {
      color: this.state.headColor,
      fontSize: "40px"
    }

    return (
      <>
        <h2 style={headStyle}>Heading</h2>
        <p style={{color: "green", fontSize: "20px"}}>paragraph</p>
      </>
    );
  }
}