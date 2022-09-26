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
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h1>WELCOME TO PYL</h1>
        <ul>
          <h3>Starting stats for day</h3>
          <li>
            <h5>Stress</h5>
            <input type="range" min="0" max="200" />
          </li>
          <li>
            <h5>Energy</h5>
            <input type="range" min="0" max="200" />
          </li>
          <li>
            <h5>Social</h5>
            <input type="range" min="0" max="200" />
          </li>
          <li>
            <h5>Fun</h5>
            <input type="range" min="0" max="200" />
          </li>
          <li>
            <h5>hygene</h5>
            <input type="range" min="0" max="200" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
