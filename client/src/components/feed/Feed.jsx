import "./feed.css";
import Posts from "../posts/Posts";
import Sidebar from "../sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const searchQuery = useLocation().search;

  //fetch all posts
  useEffect(() => {
    const getAllPosts = async () => {
      const res = await axios.get("/api/post" + searchQuery);
      setPosts(res.data);
    };
    getAllPosts();
  }, [searchQuery]);

  return (
    <div className="feed">
      <Posts posts={posts} />
      <Sidebar />
    </div>
  );
}
