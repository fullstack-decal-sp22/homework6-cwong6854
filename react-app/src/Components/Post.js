import Comment from './Comment';

const Post = ({ title, body, postId, comments}) => {
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <p>{comments}</p>
    <p>{postId}</p>
    <Comment comments={comments} />
  </div>
}

export default Post;
