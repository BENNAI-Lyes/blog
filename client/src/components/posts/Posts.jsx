import "./posts.css";
import Post from "../post/Post";

export default function Posts({ posts }) {
  return (
    <>
      {posts.length ? (
        <div className="posts">
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="noPosts">There is no post found ...</div>
      )}
    </>
  );
}
