import './App.css';
import Header from './components/header/header';
import SortControls from './components/sort-controls/sort-controls';
import Visualizer from './pages/visualizer/visualizer';

function App() {
  return (
    <div className="App">
      <Header />
      <SortControls />
      <Visualizer />
    </div>
  );
}

export default App;
