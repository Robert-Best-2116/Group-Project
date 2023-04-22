
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ViewPost from './components/ViewPost';
import Create from './components/Create';

function App() {
  return (
    <Router>
    <div className="App">

      <Routes>
        {/* Need to add page routes for LOGIN/REGISTRATION */}
        {/* DASHBOARD(Home) */}
        <Route path='/dashboard' element={<Dashboard />} />
        {/*VIEW POST BY ID*/}
        <Route path='/application/:id' element={<ViewPost />} />
        {/* CREATE APPLICATION */}
        <Route path='/application' element={<Create />}/>
        {/* Need to add page routes for EDIT */}
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
