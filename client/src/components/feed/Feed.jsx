import "./feed.css";
import Posts from "../posts/Posts";
import Sidebar from "../sidebar/Sidebar";

export default function Feed() {
  return (
    <div className="feed">
      <Posts />
      <Sidebar />
    </div>
  );
}
