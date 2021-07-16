import React from "react";
import Navigation from "./Navigation";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.pageTitles = ["Home", "Message", "Me"];
    this.state = {
      currentIndex: 0
    }
  }
  render() {
    const { currentIndex } = this.state;
    return (
      <div>
        <Navigation pageTitles={this.pageTitles}
                    tagClick={(index)=>this.changePage(index)} />
        <h2>{this.pageTitles[currentIndex]}</h2>
      </div>
    );
  }
  changePage(index) {
    this.setState({
      currentIndex: index
    });
  }
}