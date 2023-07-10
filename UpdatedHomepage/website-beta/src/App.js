import HomePage from './components/HomePage';
import Resume from './components/Resume';
import Quotes from './components/Quotes';

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/quotes' element={<Quotes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
