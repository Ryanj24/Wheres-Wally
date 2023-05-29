import './index.css'
import Header from './components/Header/Header';
import LevelClock from './components/LevelClock/LevelClock';

function App() {

  return (
    <div className="App">
      <Header />
      <div className='main-container'>
        <div className='level-clock'>
          <LevelClock />
        </div>
        <div className='image-leaderboard'>

        </div>

      </div>
    </div>
  );
}

export default App;
