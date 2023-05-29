import './index.css'
import Header from './components/Header/Header';
import LevelClock from './components/LevelClock/LevelClock';
import Image from './components/Image/Image';
import Leaderboard from './components/Leaderboard/Leaderboard';

function App() {

  return (
    <div className="App">
      <Header />
      <div className='main-container'>
        <div className='level-clock'>
          <LevelClock />
        </div>
        <div className='image-leaderboard'>
          <Image />
          <Leaderboard />
        </div>

      </div>
    </div>
  );
}

export default App;
