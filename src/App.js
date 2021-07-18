import React from "react";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      movie: "Forrest Gump"
    }
  }
  render() {
    console.log("App render()");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={ae => this.add(1)}> +1 </button>
        <button onClick={e => this.changeMoive("千と千尋の神隠し")}>Change</button>
        <FunctionComponent />
        <ClassComponent />
      </div>
    );
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

function FunctionComponent(props) {
  console.log("Function Component");
  return (
    <div>
      <h2>Function Component</h2>
    </div>
  );
}

class ClassComponent extends React.PureComponent {
  render() {
    console.log("Class Component");
    return (
      <div>
        <h2>Class Component</h2>
      </div>
    );
  }
}