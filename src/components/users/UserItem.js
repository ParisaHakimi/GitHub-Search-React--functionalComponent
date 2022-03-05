import React from "react";
import { Link } from "react-router-dom";
const UserItem = ({ user: { avatar_url, login } }) => {
  return (
    <div className="col-md-4 text-center mb-2">
      <div className="card">
        <img
          style={{
            width: "7rem",
            height: "7rem",
            borderRadius: "50%",
            margin: "1rem auto",
          }}
          src={avatar_url}
          alt=""
        />
        <h3>{login}</h3>
        <Link to={`/user/${login}`} className="btn btn-dark">
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
