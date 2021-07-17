import React from "react";

const CharacterContext = React.createContext({
  name: "I don't know",
  age: 0
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Harry Potter",
      age: 21
    }
  }
  render() {
    return (
      <div>
        <h1>L</h1>
        <CharacterContext.Provider value={this.state}>
          <Profile />
        </CharacterContext.Provider>
        <h1>L</h1>
      </div>
    );
  }
}

function Profile(props) {
  return (
    <div>
      <h2>M</h2>
      <Information />
      <h2>M</h2>
    </div>
  );
}

class Information extends React.Component {
  render() {
    return (
      <div>
        <h3>S</h3>
        <h3>Name: {this.context.name}</h3>
        <h3>Age: {this.context.age}</h3>
        <h3>S</h3>
      </div>
    );
  }
}
Information.contextType = CharacterContext;