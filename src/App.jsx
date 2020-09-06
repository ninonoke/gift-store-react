import React from 'react';
import './App.css';
import Layout from './Layout/index.jsx'
import './Assets/normalize.css'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
