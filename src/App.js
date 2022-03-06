import { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import SearchUser from "./components/users/SearchUser";
import Users from "./components/users/Users";
import User from "./components/pages/User";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  //search users
  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios(
      `https://api.github.com/search/users?q=${text}&CLIENT_ID=561b493cd9319e39f5fe&CLIENT_SECRET=6276e6f7259c2e2d7a14aa86861c760ef2bef2a1`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  //get single user
  const getSingleUser = async (userName) => {
    const res = await axios(
      `https://api.github.com/users/${userName}?CLIENT_ID=561b493cd9319e39f5fe&CLIENT_SECRET=6276e6f7259c2e2d7a14aa86861c760ef2bef2a1`
    );
    setUser(res.data);
  };

  //get repos
  const getRepos = async (userName) => {
    const res = await axios(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&CLIENT_ID=561b493cd9319e39f5fe&CLIENT_SECRET=6276e6f7259c2e2d7a14aa86861c760ef2bef2a1`
    );
    setRepos(res.data);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchUser searchUsers={searchUsers} users={users} />
                <Users users={users} loading={loading} />
              </>
            }
          />
          <Route
            path="/user/:login"
            element={
              <User
                user={user}
                getSingleUser={getSingleUser}
                getRepos={getRepos}
                repos={repos}
              />
            }
          />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
