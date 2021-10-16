import TimeTracks from './data/timeTracks.json'

function App() {
  return (
    <div className="App">
      {TimeTracks.map(timeTrack => (
        <h2>{timeTrack.title}</h2>
      ))}
    </div>
  );
}

export default App;
