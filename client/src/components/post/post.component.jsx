import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/spinner.component';
import PostItem from '../posts/posts-item.component';
import CommentForm from '../post/post-commentForm.component';
import CommentItem from '../post/post-commentItem.component';
import { getPost } from '../../redux/actions/post';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    // fire action passing url params via the match prop
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  /* 
    # make sure post has loaded,
    # if loading is true or if there are no posts in state
  */
  return loading || post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to='/posts' className='btn'>
        Back To Posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className='comments'>
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
