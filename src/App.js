import logo from './logo.svg';
import './App.css';
import Card from './Card';
import NavBar from './Navbar';

function App() 
{
  return (
    <div className="App">
      <NavBar />
      <h1>CS 230L</h1>
      <h2>Section - 002</h2>
      <p>WVU ID: 800364829</p>
      <p>Hi I am Dante Capuzzi</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card title="Card 01" color="blue" />
        <Card title="Card 02" color="red" />
        <Card title="Card 03" color="green" />
      </div>
    </div>
  );
}

export default App;