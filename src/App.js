import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      movie: "Forrest Gump"
    }
  }
  render() {
    console.log("render()");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={ae => this.add(1)}> +1 </button>
        <button onClick={e => this.changeMoive("千と千尋の神隠し")}>Change</button>
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }
  add(vlaue) {
    this.setState({
      count: this.state.count + 1
    });
  }
  changeMoive(movie) {
    this.setState({
      movieList: movie
    });
  }
}