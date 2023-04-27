// import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ViewPost from "./components/ViewPost";
import { useMemo, useState } from "react";
import Create from "./components/Create";
import Edit from "./components/Edit";
import LoginReg from "./components/LoginReg";
import Home from "./screen/Home";
import About from "./components/About";
import Register from "./components/Register";
import { UserContext } from "./components/UserContext"

function App() {

  const [loggedInUser, setLoggedInUser] = useState({}); //Setting a useState variable to use as the global context value. - BL
  const providerValue = useMemo(() => ({loggedInUser, setLoggedInUser}), [loggedInUser, setLoggedInUser]); //Using Memo so that the logged in user context variable will update any time it is changed in the application. - BL


  return (
    <Router>
    <div className="App">
      {/* ++++++++ */}
      {/* Applying User Context so that it can be used across all routes - BL */}
      < UserContext.Provider value={providerValue}>
      <Routes>
        {/* LANDING PAGE (HOME) - JG */}
        <Route path="/" element={<Home />} />
        {/* LOGIN AND REG PAGE BELOW - BL */}
        <Route path="/loginreg" element={<LoginReg />} />
        {/* REGISTER ROUTE FOR MOBILE VIEW - JG */}
        <Route path="/register" element={<Register />} />
        {/* DASHBOARD PAGE - JG */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* ABOUT PAGE - JG */}
        <Route path="/about" element={<About />} />
        {/* VIEW POST PAGE - JG */}
        <Route path="/application/:id" element={<ViewPost />} />
        {/* CREATE APPLICATION PAGE BELOW - Alex */}
        <Route path="/application" element={<Create />} />
        {/* EDIT APPLICATION PAGE BELOW - Alex */}
        <Route path="/application/edit/:id" element={<Edit />} />
      </Routes>
      {/* ++++++++ */}
      </UserContext.Provider>
    </div>
  </Router>
  );
}

export default App;
