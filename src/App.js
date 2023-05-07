import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-6xl font-bold underline bg-slate-300">
          Hello world!
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button class="bg-sky-500 hover:bg-sky-700 ...">
          Save changes
        </button>
      </header>
    </div>
  );
}

export default App;
