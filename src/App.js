import React, { createContext } from "react";

const UserInformationContext = createContext({
  level: 0,
  region: "Earth"
});

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>APP</h1>
        <UserInformationContext.Provider value={{level: 99, region:"Britain"}}>
          <UserProfile name="Harry Potter" age={18} />
          <UserProfile name="Sherlock Holmes" age={26} />
          <UserIntro rank="Boss" />
        </UserInformationContext.Provider>
      </div>
    );
  }
}

function withUserInformation(WrappedComponent) {
  return (props) => {
    return (
      <UserInformationContext.Consumer>
        {
          value => <WrappedComponent {...props} {...value}/>
        }
      </UserInformationContext.Consumer>
    );
  }
}

class Profile extends React.PureComponent {
  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <h2>Age: {this.props.age}</h2>
        <h2>Level: {this.props.level}</h2>
        <h2>Region: {this.props.region}</h2>
        <hr />
      </div>
    );
  }
}

const UserProfile = withUserInformation(Profile);

function Intro(props) {
  return (
    <div>
      <ul>
        <li>Rank: {props.rank}</li>
        <li>Level: {props.level}</li>
        <li>Region: {props.region}</li>
      </ul>
    </div>
  );
}

const UserIntro = withUserInformation(Intro);