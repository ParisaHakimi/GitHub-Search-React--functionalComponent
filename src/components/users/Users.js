import React from "react";
import UserItem from "./UserItem";
import Loader from "./../layout/Loader";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="row">
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

export default Users;
