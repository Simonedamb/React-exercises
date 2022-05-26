import React from "react";
import Welcome from "./Welcome";
import Counter from "./Counter";
import { GithubUserList } from "./GithubUserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import UseGithubUser from "./useGithubUser";
import GithubUser from "./GithubUser";

export function App() {
  return (
    <>
      <Router>
        <div>
          <Link to="/Welcome">Welcome|</Link>
          <Link to="/users">Username|</Link>
          <Link to="/counter">Counter|</Link>
        </div>

        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users:/name" element={<GithubUserList />}>
            <Route index element={<p>Aggiungi un utente e selezionalo</p>} />
          </Route>
          <Route path="users" element={<UseGithubUser />} />
          <Route>
            <Route
              path="username"
              element={<GithubUser username="simonedamb" />}
            />
          </Route>
          <Route
            path="*"
            element={
              <div>
                <p>Percorso Non Trovato</p>
                <Link to="/welcome">Torna Indietro</Link>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
