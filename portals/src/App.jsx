import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={'easy'} targetTime={30} />
        <TimerChallenge title={'not easy'} targetTime={20} />
        <TimerChallenge title={'getting tough'} targetTime={15} />
        <TimerChallenge title={'pros only'} targetTime={3} />
      </div>
    </>
  );
}

export default App;
