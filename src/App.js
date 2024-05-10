import './App.css';
import React from 'react'
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './Components/Checkout';
import Orders from './Components/Orders';
import CrudComponent from './Components/Crud';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="Crud" element={<CrudComponent/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/Orders" element={<Orders />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
