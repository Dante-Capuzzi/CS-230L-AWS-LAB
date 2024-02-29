import logo from './logo.svg';
import './App.css';
import './Navbar.js'
import './Card.js'

function App() 
{
  return (
    <div className="App">
      <nav></nav>
      <h1>CS 230L</h1>
      <h2>Section - 002</h2>
      <p>WVU ID: 800364829</p>
      <p>Hi I am Dante Capuzzi</p>
      <div>
        <card></card>
        <card></card>
        <card></card>
      </div>
    </div>
  );
}

export default App;
