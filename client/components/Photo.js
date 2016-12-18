import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component {

  render() {
    const { post, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
          <img
            src={post.display_src}
            alt={post.caption}
            className="grid-photo"
          />

            <CSSTransitionGroup
              transitionName="like"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              <span
                key={post.likes}
                className="likes-heart">{post.likes}</span>
            </CSSTransitionGroup>

          </Link>
        </div>

        <figcaption>
        <p>{post.caption}</p>
          <div className="control-buttons">
            <button
              className="likes"
              onClick={this.props.increment.bind(null, i)}>
                &hearts; {post.likes}
              </button>
            <Link
              to={`/view/${post.code}`}
              className="button"
            >
              <span className="comment-count">
                <span className="speach-bubble">
                  {comments[post.code] ? comments[post.code].length : 0}
                </span>
              </span>
            </Link>
          </div>

        </figcaption>
      </figure>
    );
  }
}

export default Photo;
