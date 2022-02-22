import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./pages/Home";
import Settings from "./pages/settings/Settings";
import SinglePost from "./pages/singlePost/SinglePost";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Login />}
          </Route>
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Login />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
          <Route path="/post/:postId">
            <SinglePost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
