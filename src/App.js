import logo from './logo.svg';
import './App.css';
import Bienvenue from './components/bienvenue/bienvenue';

function App() {
  return (
    <div className="App">
      <Bienvenue nom="Riri" age={15} />
    </div>
  );
}

export default App;
