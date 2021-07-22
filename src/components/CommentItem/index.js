import React, { PureComponent } from 'react';

import { Comment, Avatar, Tooltip } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';

export default class CommentItem extends PureComponent {
  render() {
    return (
      <Comment
        actions={[<span onClick={e => this.props.removeComment()}><CloseCircleFilled /> delete</span>]}
        author={<a href="/#">{this.props.username}</a>}
        avatar={
          <Avatar
            src={this.props.avatar}
            alt="avatar" />
        }
        content={
          <p>{this.props.comment}</p>
        }
        datetime={
          <Tooltip title={this.props.datetime.format('YYYY-MM-DD HH:MM')}>
            {this.props.datetime.fromNow()}
          </Tooltip>
        }
      />
    )
  }
}