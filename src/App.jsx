import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import Home from './Page/Home/Home'
import ShopOnline from './Page/ShopOnline/ShopOnline';
import Layout from './components/Layout/Layout';



function App() {


  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='shoponline' element={<ShopOnline />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
  
}

export default App
