import { useState } from 'react';
// import logo from './logo.svg';

function App() {
  const jm = "하이~clone test"                // model
  let [listData, setlistData] = useState(1)
  function test() {
    return 100;
  }
  return (
    <div className="App">
      <div> {listData} </div>
      <button onClick={()=>{setlistData(listData+1)}}> click클릭 </button>
    </div>
  );
}

export default App;
