import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

import { addLike, removeLike, deletePost } from '../../redux/actions/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date }
}) => {
  return (
    <div className='posts'>
      <div className='post bg-white p-1 my-1'>
        <div>
          <a href='profile.html'>
            <img className='round-img' src={avatar} alt='' />
            <h4>{name}</h4>
          </a>
        </div>
        <div>
          <p className='my-1'>{text}</p>
          <p className='post-date'>
            Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>{' '}
          </p>
          <button
            onClick={(e) => addLike(_id)}
            className='btn btn-light'
            type='button'>
            <i className='fas fa-thumbs-up' />{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            className='btn btn-light'
            type='button'
            onClick={(e) => removeLike(_id)}>
            <i className='fas fa-thumbs-down'></i>
          </button>
          <Link to={`/posts/${_id}`} className='btn btn-primary'>
            Discussion
            <span className='comment-count'>{comments.length}</span>
          </Link>
          {/* Make sure user posting is logged in */}
          {!auth.loading && user === auth.user._id && (
            <button className='btn btn-danger' type='button'>
              <i className='fas fa-times'></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
