// import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ViewPost from "./components/ViewPost";
import { useState } from "react";
import CreatePost from "./components/CreatePost";


function App() {
  // STATE VALUE TO HOLD ALL APPLICATIONS - Alex
  // WILL BE USED BY CreatePost AND Dashboard - Alex
  const [applications, setApplications] = useState([]);

  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Will need to implement ID in Route and on Button in card in Dashboard page*/}
          <Route path="/view" element={<ViewPost />} />
          {/* CREATE APPLICATION PAGE BELOW - Alex */}
          <Route
            path="/create"
            element={
              <CreatePost
                applications={applications}
                setApplications={setApplications}
              />
            }
          />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
