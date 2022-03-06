import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  return (
    <ul className="list-group">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </ul>
  );
};

export default Repos;
