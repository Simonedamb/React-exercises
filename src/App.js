import React from "react";
import Welcome from "./Welcome";
import Counter from "./Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    </>
  );
}
