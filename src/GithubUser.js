import { useEffect, useState } from "react";

function GithubUser({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [username]);

  return <div>{data && <h1>{data.name}</h1>}</div>;
}
export default GithubUser;
