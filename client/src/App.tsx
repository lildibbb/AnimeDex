import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/auth/homepage" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
