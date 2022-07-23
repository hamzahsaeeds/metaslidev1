import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Fetch from './components/Fetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="FB-link"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          className="WhatsApp-link"
          href="https://wa.me/+923174149260"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a> */}
      </header>

      <Router>
        <div className='routes'>
          <Routes>
            <Route path="/fetch" element={<Fetch />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
