import React from "react";

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>APP</h1>
        <AuthMePage isLogin={true} />
      </div>
    );
  }
}

function withAuth(WrappedComponent) {
  return (props) => {
    if (props.isLogin) {
      return <WrappedComponent {...props} />
    } else {
      return <LoginPage />
    }
  }
}

class MePage extends React.PureComponent {
  render() {
    return (
      <h2>ME</h2>
    )
  }
}

const AuthMePage = withAuth(MePage);

class LoginPage extends React.PureComponent {
  render() {
    return (
      <h2>LOG IN</h2>
    )
  }
}