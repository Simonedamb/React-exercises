import { useGithubUser } from "./useGithubUser";

function GithubUser({ username }) {
  const { data, loading, error, userFetchGit } = useGithubUser(username);

  function handleGitFetch() {
    userFetchGit(username);
  }

  return (
    <div>
      <button onClick={handleGitFetch}>Load User Data</button>
      {loading && <h2>Loading...</h2>}
      {error && <h2>This is an error</h2>}
      {data && <h2>{data.name}</h2>}
    </div>
  );
}
export default GithubUser;
