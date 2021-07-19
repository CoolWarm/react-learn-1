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
              return (
                <li key={item.name}>
                  name: {item.name}
                  age: {item.age}
                  <button onClick={e => this.addAge(index)}>Age+1</button>
                </li>
              );
            })
          }
        </ul>
        <button onClick={e => this.addFriend()}> ADD </button>
      </div>
    );
  }
  addAge(index) {
    // 虽然在内存中，newFriends和friends中的对象是相同的，修改其中一个数组中的元素，另一个数组中也会相应改变
    // 但在PureComponent或shouldComponentUpdate中，比较的时前后state，因为两者指向的内存不一样，即使内容一样，也判断为不相等
    // 所以此方式没有问题（推荐）
    const newFriends = [...this.state.friends];
    newFriends[index].age++;
    this.setState({
      friends: newFriends
    })
  }
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