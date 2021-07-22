import React, { PureComponent } from 'react';
import moment from 'moment';

import { Button, Input } from 'antd';

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      commentText: ""
    }
  }
  render() {
    return (
      <>
        <Input.TextArea rows={4}
          allowClear
          showCount
          maxLength={150}
          value={this.state.commentText}
          onChange={e => this.handleChange(e)} />
        <Button
          type="primary"
          block
          style={{margin: "15px 0"}}
          onClick={e => this.submitComment()}>Submit</Button>
      </>
    )
  }
  handleChange(event) {
    this.setState({
      commentText: event.target.value
    });
  }
  submitComment() {
    const infor = {
      id: Date.now(),
      username: "Harry Potter",
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      datetime: moment(),
      comment: this.state.commentText,
    }
    this.props.submitComment(infor);
    this.setState({
      commentText: ""
    });
  }
}
