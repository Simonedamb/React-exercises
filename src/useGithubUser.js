import useSWR from "swr";
import { Link, Outlet } from "react-router-dom";

const fetcher = (url) => fetch(url).then((response) => response.json());

const useGithubUser = () => {
  const { data, error } = useSWR(`https://api.github.com/users`, fetcher);

  return (
    <div>
      {!data && !error && <h3>Loading</h3>}
      {error && <h3>an error has occurred</h3>}
      {data && !error && (
        <ul>
          {data.map((user) => (
            <li key={user.login}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </div>
  );
};

export default useGithubUser;
