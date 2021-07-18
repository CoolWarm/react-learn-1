import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: ["The Shawshank Redemption", "Forrest Gump", "Léon", "Titanic"]
    }
  }
  render() {
    return (
      <div>
        <h2>Movie List</h2>
        <ul>
          {
            this.state.movieList.map((item, index) => {
              return (
                <li key={item}>{item}</li>
              );
            })
          }
        </ul>
        <button onClick={e => this.addMoive("千と千尋の神隠し")}>Add</button>
      </div>
    );
  }
  addMoive(movie) {
    this.setState({
      // movieList: [...this.state.movieList, movie]
      movieList: [movie, ...this.state.movieList]
    });
  }
}