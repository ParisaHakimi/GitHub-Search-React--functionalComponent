import React from "react";

const RepoItem = ({ repo: { html_url, name } }) => {
  return (
    <li className="list-group-item">
      <a href={html_url}>{name}</a>
    </li>
  );
};

export default RepoItem;
