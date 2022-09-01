import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import TravelLog from './components/TravelLog';
import globe from './images/globe.jpg'
import data from './data'

function App() {

  const logs = data.map((log) => { return <TravelLog key = {log.id} travelJ = {log}/>})

  return (
    <div className="App">
      <NavBar image ={globe} title="My Travel Journal"/>
      {logs}
    </div>
  );
}

export default App;
