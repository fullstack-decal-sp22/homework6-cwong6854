import Comment from './Comment';
import NewComment from './NewComment';

const Post = ({ title, body, postId, comments}) => {

  return (
  <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    {comments}
    <NewComment postId={postId} comments={comments}/>
  </div>
  
  )
}

export default Post;
