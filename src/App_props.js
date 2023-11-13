import { useState } from 'react';
import './App.css'
// import ModalView from './Components/ModalView.jsx'; // from 뒤에 경로를 Modal에 넣었다는 느낌

function App() {
  const [num,setNum] = useState(0)
  const [data,setData] = useState([
    " TAB 1 - 입니다! ",
    " TAB 2 - 입니다! ",
    " TAB 3 - 입니다! "
  ])

  // function handlerTab() {
  //   setNum(1)
  // }
  return (
    <div className="App">

      {/* <ModalView />         */}
      {num}     
      
      <div className='tab'>
        <ul>
          <li onClick={()=>{setNum(0)}} className={`${num == 0 ? "active" : ""}`}> tab1 </li>
          <li onClick={()=>{setNum(1)}} className={`${num == 1 ? "active" : ""}`}> tab2 </li>
          <li onClick={()=>{setNum(2)}} className={`${num == 2 ? "active" : ""}`}> tab3 </li>
        </ul>
      </div>
      <div style={{margin:"0 0 10px 0"}}>
        {data[num]}
      </div>
      <hr />

{/*  hr 아래에 텍스트들 클릭이벤트 부여! */}
      <ul className='lists'>
      {
        data.map(function(item, i){
          return(
            <>
            <li onClick={()=>{setNum(i)}}>{item}</li> 
            </>
          )
        })
      }
      </ul>
      <Modal rData={data} rNum={num} />  
      {/*  여기서 rData 이름 , {data} = 위쪽에서 데이터를 가져온거. Modal이라는 이름의 함수로 props전달. */}
      </div>
  );
}
// props를 쓰는 이유는
function Modal(props) {
  return (
    <>
      <div className="modal">
        <h3>Subject</h3>
        <p>{props.rData[props.rNum]}</p>
        {/* data[0], data[1], data[2] 이렇게 변화되면서 바뀜 */}
      </div>
    </>  
  )
}

export default App;
