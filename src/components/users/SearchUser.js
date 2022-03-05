import { useState } from "react";

const SearchUser = ({ searchUsers }) => {
  const [text, setText] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      searchUsers(text);
      setText("");
    }
  };
  return (
    <form action="" onSubmit={submitHandler} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button className="btn btn-dark w-100">Search</button>
    </form>
  );
};

export default SearchUser;
