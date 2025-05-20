import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import NotFound from "./component/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <Router>

        <Routes>
          <Route path="/" element={<NotFound />} />
        </Routes>
    </Router>
  );
};

export default App;
