import React from "react";
import Welcome from "./Welcome";
import Counter from "./Counter";
import { GithubUserList } from "./GithubUserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export function App() {
  return (
    <>
      <Router>
        <div>
          <Link to="/Welcome">Welcome|</Link>
          <Link to="/username">Username|</Link>
          <Link to="/counter">Counter|</Link>
        </div>

        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/username" element={<GithubUserList />} />
        </Routes>
      </Router>
    </>
  );
}
