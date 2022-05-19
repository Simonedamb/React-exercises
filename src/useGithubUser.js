import { useState } from "react";

export function useGithubUser() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(null);
  async function fetchGithubUser(username) {
    setLoad(true);
    setErr(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setData(json);
    } catch (e) {
      setErr(e);
      setData(null);
    } finally {
      setLoad(false);
    }
  }
  return { data, err, load, onFetchUser: fetchGithubUser };
}
