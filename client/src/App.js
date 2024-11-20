import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ABTesting from './components/ABTesting';
import AddRemoveElements from './components/AddRemoveElements';
import Checkboxes from './components/Checkboxes';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/ab-testing">A/B Testing</Link></li>
            <li><Link to="/add-remove-elements">Add/Remove Elements</Link></li>
            <li><Link to="/checkboxes">Checkboxes</Link></li>
            <li><Link to="/dropdown">Dropdown</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/ab-testing" component={ABTesting} />
          <Route path="/add-remove-elements" component={AddRemoveElements} />
          <Route path="/checkboxes" component={Checkboxes} />
          <Route path="/dropdown" component={Dropdown} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;