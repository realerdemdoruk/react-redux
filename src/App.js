import './App.css';
import Counter from './components/Counter';
import Themes from './components/Themes';

function App() {
  return (
    <div className="App">
      <p>
        <Counter />
      </p>
      <p>
        <Themes />
      </p>
    </div>
  );
}

export default App;
