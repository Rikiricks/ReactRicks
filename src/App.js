import logo from './logo.svg';
import './App.css';
import {RouterConfig} from './navigation/RouterConfig'
import {BrowserRouter, NavLink, Route, Router} from 'react-router-dom'
import {NavLinks} from './navigation/NavLinks'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React Faster.
        </a>
        
      </header> */}   
         
      <BrowserRouter>
      <RouterConfig/>     
      </BrowserRouter>
    </div>
  );
}

export default App;
