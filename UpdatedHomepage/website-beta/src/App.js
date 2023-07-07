import HomePage from './components/HomePage';
import Resume from './components/Resume';

import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
