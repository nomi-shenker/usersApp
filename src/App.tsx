import { url } from 'inspector';
import React from 'react';
// import Image from './../src/assets/backgroundImage'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Posts } from './components/posts/Posts';
import { Users } from './components/users/Users';
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        
        <Route  path="/posts" element={<Posts />}/>
        <Route path="/" element={<Users/>}/>
        
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
