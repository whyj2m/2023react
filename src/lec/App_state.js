import { useState } from 'react';
// import logo from './logo.svg';
import './App.css'

function App() {
  let [data,setData] = useState(1)
  let [listData,setlistData] = useState(['list1', 'list2', 'list3'])
  let [mView, setMview] = useState(false)
  let today = new Date();
  let time = {
    year:today.getFullYear(),
    month:today.getMonth() + 1,
    date:today.getDate()
  }
  return (
    <div className="App">
      <div>{data}</div>
      <button onClick={()=>{setData(data + 1)}}> 클릭 </button>
     {
      listData.map(function(item,i){
        return(
          <>
            <div className='flex'>
              <div class="list">{item}</div>
              <div>{time.year + "년 " + time.month + "월 " + time.date + "일" }</div>
            </div>
          </>
        )
      })
     }
     <button onClick={() => {setMview(!mView)}}> 모달 생성 </button>
     {
      mView == true ?  <Modal /> : null     
     }

    </div>
  );
}

// 이부분이 컴포넌트
function Modal() {

  return(
    <div className='modal'>
      <h3>제목</h3>
      <p> 안녕하세요 </p>
    </div>
  )
}

export default App;
