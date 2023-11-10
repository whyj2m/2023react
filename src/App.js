import logo from './logo.svg';

function App() {
  const jm = "하이~clone test"
  function test() {
    return 100;
  }
  return (
    <div className="App">

      <div> {jm}{test()} </div>

    </div>
  );
}

export default App;
