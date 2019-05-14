/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import PostHead from './PostHead';

const Post = props => (
  <div className="post">
    <PostHead profile={props.data.profile} name={props.data.name} time={props.data.time} />
    <div className="post-content">
      <p>{props.data.body}</p>
    </div>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
