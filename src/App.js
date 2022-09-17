import React from 'react'
import { Route, Routes, } from "react-router-dom";
import Home from './components/Home';
import Post from './components/Post';
import "./App.css"



function App() {
  return (
       
           <Routes>
              
              <Route path='/' element={<Home />}/>
              <Route path='/post/:id' element={<Post />}/>
           </Routes>
     
  
   
  )
}

export default App
