import './App.css';
import { HomePage } from './pages/HomePage';
import Vector from './assets/vector-bg.png';

function App() {
  return (
    <div className="App">
      <HomePage />
      <img src={Vector} alt="Vector" className='vector-background' />
    </div>
  );
}

export default App;
