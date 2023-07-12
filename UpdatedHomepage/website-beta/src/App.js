import HomePage from './components/HomePage';
import Resume from './components/Resume';
import Quotes from './components/Quotes';
import { useNavigate } from 'react-router-dom';
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menubar from './components/Menubar';
import EmailContactForm from './components/Messaging/Email';


function App() {

  return (
    <BrowserRouter>
      <Menubar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/quotes' element={<Quotes />} />
        <Route path='/email' element={<EmailContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
