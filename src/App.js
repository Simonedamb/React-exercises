import React from "react";
import Welcome from "./Welcome";
import Counter from "./Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/username" element={<GithubUserList />} />
        </Routes>
      </Router>
    </>
  );
}
