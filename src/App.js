import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import NavBar from './Components/Layouts/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
