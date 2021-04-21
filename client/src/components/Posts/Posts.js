import React from "react";
import Post from "../Post/Post";
import "./Posts.css";

function Posts(props) {
  const [openPostId, setOpenPostId] = React.useState(null);

  return (
    <div className="posts">
      {props.posts.map((post) => (
        <Post
          handleClick={(id) =>
            setOpenPostId((prevId) => (prevId === id ? null : id))
          }
          post={post}
          isOpen={post.id === openPostId}
          key={post.id}
        />
      ))}
    </div>
  );
}

export default Posts;
