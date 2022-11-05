import { Link } from "react-router-dom";
import { HandThumbsUp } from 'react-bootstrap-icons';
const PostList = ({ posts, title }) => {
  return (
    <div>
      <div className="blog-list">
            <h2>{title}</h2>
             {posts.map((post) => (
                <div key={post.id}>
                    <Link className="link" to={`/posts/${post.id}`}>
                        <h4>{ post.post_title }</h4>
                        <p>{post.post_body}</p>
                        <div>
                     <span className="badge bg-primary">{post.date_posted}</span>{" "}
                     <span className="badge bg-secondary">Author: {post.author}</span>{" "}
                     <div className="float-end">

                       <span className="badge bg-success"><HandThumbsUp size={20} />{post.likes}</span>{" "}
                       
                     </div>
                   </div>
                    </Link> 
                    <hr/>
                </div>
            ))} 
             
        </div>
    </div>
  );
};

export default PostList;
