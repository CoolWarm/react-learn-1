import React from "react";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        {
          name: "Harry Potter",
          age: 14
        },
        {
          name: "Peter Parker",
          age: 18
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.friends.map((item, index) => {
              return <li key={item.name}>{item.name}</li>
            })
          }
        </ul>
        <button onClick={e => this.addFriend()}> ADD </button>
      </div>
    );
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.friends !== nextState.friends) {
  //     return true;
  //   }
  //   return false;
  // }
  addFriend() {
    const newFriend = {
      name: "Sherlock Holmes",
      age: 26
    }
    // 浅拷贝 == 在原state上直接修改 ×
    // const newFriends = this.state.friends;
    // 深拷贝 == 将数组中的变量放入新建的数组中 √
    const newFriends = [...this.state.friends];
    newFriends.push(newFriend);
    this.setState({
      friends: newFriends
    });
  }
}