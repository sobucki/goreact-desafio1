import React from 'react';

// import { Container } from './styles';

const PostHead = props => (
  <div className="post-header">
    <div className="post-profile">
      <img src={props.profile} alt="profile picture" />
      <div className="post-profile-name">
        <span className="span-name">{props.name}</span>
        <span className="span-time">{props.time}</span>
      </div>
    </div>
  </div>
);

export default PostHead;
