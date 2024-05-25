import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./SearchPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
