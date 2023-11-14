import { useState } from 'react';
import './App.css'
import Modal from '../Components/Modal.jsx';

function App() {
  const [vData,setVdata] = useState([
    "1. Lorem ipsum dolor sit amet.",
    "2. rorem ipsum dolor sit amet.",
    "3. 7orem ipsum dolor sit amet.",
  ])
  const [num,setNum] = useState(0)
  const [view,setView] = useState(false)
  const [textData,setTextData] = useState("")

  const listView = function(num){
    setNum(num)
    setView(true)
    // console.log(num);
  }

  const handleClose = () => {
    setView(false)
  }

  return (
    <div className="app">
      <div className='num'>
        {num}
      </div>
      <ul className='lists'>
      {
        vData.map(function(item, i){
          return(
            <>
            <li onClick={() => {listView(i)}}>{item}</li>
            <br />
            </>
          )
        })

      }
      </ul>

      {
        view == true ? <Modal vContent={vData} vNum={num} onclose={handleClose}/> : null
      }
      {textData} <br />
      <input type='text' onChange={(event) => {setTextData(event.target.value)}} value={textData} />
      <button onClick={() => {
        let copy = [...vData]   
        copy.unshift(textData)
        console.log(copy)
        setVdata(copy)
      }}> 입력 </button>
      <button onClick={() => {setTextData('')}}> 초기화 </button>
    </div>
  )
}



export default App;
