import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
