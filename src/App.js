import './App.css';
import './styles.css';
import Roleselectscreen from './components/Roleselectscreen';
import Djscreen from './components/Djscreen';
import Viewerscreen from './components/Viewerscreen';

function App() {
  return (
    <div className="App">
      <div className='fullscreen'>
        <Viewerscreen/>
      </div>
    </div>
  );
}

export default App;
