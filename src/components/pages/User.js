import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const User = ({ user, getSingleUser }) => {
  const params = useParams();
  useEffect(() => {
    getSingleUser(params.login);
  }, []);
  const {
    login,
    avatar_url,
    html_url,
    location,
    hireable,
    bio,
    blog,
    public_repos,
    public_gists,
    followers,
    following,
  } = user;
  return (
    <div className="col-12">
      <Link to="/" className="btn btn-dark">
        Back to home page
      </Link>
      <span className="ms-2">
        Hireable:
        {hireable ? (
          <i className="fas fa-check text-success ms-2"></i>
        ) : (
          <i className="fas fa-times text-danger ms-2"></i>
        )}
      </span>
      <div className="card mt-3 p-3">
        <div className="row">
          <div className="col-6 text-center">
            <div>
              <img className="user-img" src={avatar_url} alt={login} />
              {login && <h3>{login}</h3>}
              {location && <h4>{location}</h4>}
            </div>
          </div>
          <div className="col-6">
            <div className="py-3">
              <p>
                <strong>BIO: {bio}</strong>
              </p>
              <div className="my-3">
                <a
                  href={html_url}
                  className="btn btn-dark text-light"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit GitHub
                </a>
              </div>
              <div>
                <p>Login: {login}</p>
              </div>
              <div>
                Website:
                <a href={blog} target="_blank" rel="noreferrer">
                  {blog}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card my-3">
        <div className="d-flex justify-content-center py-3">
          <span className="badge bg-danger mx-2">Followers {followers}</span>
          <span className="badge bg-success mx-2">Following {following}</span>
          <span className="badge bg-warning mx-2">
            public repos {public_repos}
          </span>
          <span className="badge bg-info mx-2">public gists{public_gists}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
