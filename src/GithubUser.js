import { useGithubUser } from "./useGithubUser";

const GithubUser = ({ username }) => {
  const { data, load, err, onFetchUser } = useGithubUser(username);

  function handleGetUserData() {
    onFetchUser(username);
  }

  return (
    <div>
      <button onClick={handleGetUserData}> Load</button>
      {load && <h2>load...</h2>}
      {err && <h2>There is an error</h2>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
};
export default GithubUser;
