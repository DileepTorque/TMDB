import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cinema from './Pages/Mainpage';
import SIngleMovie from './Pages/SIngleMovie';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cinema/>}/>
        <Route path='/Particular' element={<SIngleMovie/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
