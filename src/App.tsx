import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Availability from "./pages/Availability";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/availability" element={<Availability/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
