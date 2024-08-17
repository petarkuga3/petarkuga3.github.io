import './App.css';

import React from 'react';
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import ContactForm from './components/other_frameworks/alpine-components/ContactForm';

function App(props) {
  return (
    <div className="App">
      <Home />
      <ContactForm />
    </div>
  );
}

export default App;
