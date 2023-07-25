import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import Layout from './components/Layout/Layout';
import Home from './Page/Home/Home'
import Navbar from './components/Navbar/Navbar';


function App() {


  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
  
}

export default App
