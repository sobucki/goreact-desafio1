import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import './reset.scss';
import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Rafael Soares Sobucki',
        profile: 'https://avatars2.githubusercontent.com/u/15240858?s=460&v=4',
        time: 'há 3 min',
        body:
          'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis',
      },
      {
        id: 2,
        name: 'Rocketseat',
        profile: 'https://avatars2.githubusercontent.com/u/15240858?s=460&v=4',
        time: 'há 30 min',
        body:
          'Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <Header>RocketBook</Header>
        {posts && posts.map(post => <Post data={post} />)}
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));
