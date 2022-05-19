import { useState } from "react";
import GithubUser from "./GithubUser";

export function GithubUserList() {
  const [data, setData] = useState(["simonedamb"]);

  const handleAddItem = (event) => {
    event.preventDefault();
    setData([...data, event.target.elements.list.value]);
  };

  return (
    <div>
      <form onSubmit={handleAddItem}>
        <input name="list" />
        <button type="submit">Add GitHub</button>
      </form>
      <ul>
        {data.map((name) => (
          <li>
            <GithubUser username={name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
