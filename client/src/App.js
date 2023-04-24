// import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ViewPost from "./components/ViewPost";
import { useState } from "react";
import Create from "./components/Create";
import Edit from "./components/Edit";
import LoginReg from "./components/LoginReg";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* LOGIN AND REG PAGE BELOW - BL */}
          <Route path="/" element={<LoginReg />} />
          {/* DASHBOARD PAGE - JG */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* VIEW POST PAGE - JG */}
          <Route path="/application/:id" element={<ViewPost />} />
          {/* CREATE APPLICATION PAGE BELOW - Alex */}
          <Route path="/application" element={<Create />} />
          {/* EDIT APPLICATION PAGE BELOW - Alex */}
          <Route path="/application/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
