import './App.css';
import Home from './pages/Home.jsx';
import Diary from './pages/Diary.jsx';
import New from './pages/New.jsx';
import Notfound from './pages/Notfound.jsx';
import Btn from './components/Button.jsx';
import { Routes, Route} from 'react-router-dom';
import {getEmotionImage} from "./assets/get-emotion-images.js";


//  1. "/": 모든 일기를 조회하는 Home 페이지
//  2. "new": 새로운 일기를 작성하는 New 페이지
//  3. "/diary": 일기를 상세히 조회하는 Diary 페이지


function App() {
return (
    <>
    <Btn text={1234}/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/diary/:id' element={<Diary/>}/>
      <Route path='*' element={<Notfound/>}/>
  </Routes>
    
    
    </>
    
  )
}

export default App
                          