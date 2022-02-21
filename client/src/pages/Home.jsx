import Header from "../components/header/Header";
import Topbar from "../components/topbar/Topbar";
import Feed from "../components/feed/Feed";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Topbar />
      <Header />
      <Feed />
    </div>
  );
}
