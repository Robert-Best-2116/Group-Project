
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ViewPost from './components/ViewPost';

function App() {
  return (
    <Router>
    <div className="App">

      <Routes>

        <Route path='/dashboard' element={<Dashboard />} />
        {/* Will need to implement ID in Route and on Button in card in Dashboard page*/}
        <Route path='/view' element={<ViewPost />} />

      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
