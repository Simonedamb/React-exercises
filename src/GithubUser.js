import useGithubUser from "./useGithubUser";

const GithubUser = () => {
  const { data, error } = useGithubUser("simonedamb");

  return (
    <div>
      {error && <h2>There is an error</h2>}
      {data && <h1>{data.name}</h1>}
    </div>
  );
};
export default GithubUser;
