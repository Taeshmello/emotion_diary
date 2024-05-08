import './App.css';
import { Routes,Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import { useReducer, useRef } from 'react';
import Button from './components/Btn';
import { getEmotionImage } from './util/get-emotion-image';
import Btn from './components/Btn';

// 1. "/": 모든 일기를 조회하는 Home 페이지
//2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지


const mokData = [
  {
    id: 1,
    createdDate : new Date().getTime,
    emotionId: 1,
    content: "1번 일기장",
  },
  {
    id: 2,
    createdDate : new Date().getTime,
    emotionId: 2,
    content: "2번 일기장",
  },
  
];

const reducer = (state, action) => {
  switch(action.type){
    case "CREATE":
      return [action.data, ...state]
    case "UPDATE":
      return state.map((item)=>
        String(item.id) === String(action.data.id)
      ? action.data 
      : item
    );
  }
}


function App() {
  const [ data,dispatch ] = useReducer(reducer, mokData);
  const idRef = useRef(3);
  
  //새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type:"CREATE",
      data: {
        id: idRef.current++,
        createdDate, 
        emotionId,
        content,
      },
    })
  }

  //기존 일기 추가
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch(
      {
        type: "UPDATE",
        data: {
          id, 
          createdDate, 
          emotionId, 
          content,
        }
      }
    )
  }

  //기존 일기 삭제

  return(
    <>
    <button onClick={()=>{
      onCreate(new Date().getTime(), 1, "HELLO")
    }}>test</button>
    <button onClick={()=>{
      onUpdate(1, new Date().getTime(),3, "수정된 일기장입니다.")
    }}></button>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/diary/:id" element={<Diary/>}/>
      <Route path='*' element={<Notfound/>} />
    </Routes>
    </>
  )
}

export default App

