import React from "react";

import { Divider } from 'antd';

import CommentInput from "./components/CommentInput";
import CommentItem from "./components/CommentItem";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      commentList: []
    }
  }
  render() {
    return (
      <div style={{ width: "500px", padding: "50px", margin: "50px auto" }}>
        <Divider orientation="left" >
          Enter comments here:
        </Divider>
        <CommentInput submitComment={this.submitComment.bind(this)} />
        <Divider
          plain
          dashed
          orientation="center" >
          comment
        </Divider>
        {
          this.state.commentList.map((item, index) => {
            return <CommentItem
              key={item.id}
              avatar={item.avatar}
              username={item.username}
              datetime={item.datetime}
              comment={item.comment}
              removeComment={() => this.removeComment(index)}
            />
          })
        }
      </div>
    );
  }
  submitComment(comment) {
    this.setState({
      commentList: [...this.state.commentList, comment]
    });
  }
  removeComment(index) {
    const commentList_ = [...this.state.commentList];
    commentList_.splice(index, 1);
    this.setState({
      commentList: commentList_
    });
  }
}

