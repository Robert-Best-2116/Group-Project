
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ViewPost from './components/ViewPost';

function App() {
  return (
    <Router>
    <div className="App">

      <Routes>
        {/* DASHBOARD(Home) */}
        <Route path='/dashboard' element={<Dashboard />} />
        {/*VIEW POST BY ID*/}
        <Route path='/api/application/:id' element={<ViewPost />} />
        {/* Need to add page routes for EDIT & CREATE: */}

      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
