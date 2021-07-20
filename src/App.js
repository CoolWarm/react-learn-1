import React from "react";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.profileRef = React.createRef();
  }
  render() {
    return (
      <div>
        <Profile ref={this.profileRef} />
        <button onClick={e => this.printRef()}>BUTTON</button>
      </div>
    );
  }
  printRef() {
    console.log(this.profileRef.current);
  }
}

const Profile = React.forwardRef(function(props, ref) {
  return (
    <p ref={ref}>Profile</p>
  );
});
