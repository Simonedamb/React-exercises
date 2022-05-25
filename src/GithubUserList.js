import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";

export function GithubUserList() {
  const [data, setData] = useState([]);

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
            <ShowGithubUser />
            <li>
              <Link to="/name">{name}</Link>
            </li>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
