import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Series from "./components/Series";
import Home from "./components/Homepage";
import Filmes from "./components/Filmes";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <h1>Page da turma 3</h1>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/series">Séries</Link>
          </li>
          <li>
            <Link to="/filmes">Filmes</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="series" element={<Series />} />
          <Route path="filmes" element={<Filmes />} />
        </Routes>
      </Router>
    );
  }
}
