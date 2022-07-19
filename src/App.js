import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
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
        </a>
      </header>
    </div>
  );
}

export default App;
