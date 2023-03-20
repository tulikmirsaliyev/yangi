
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route to="/" component={Home} />
        <Route to="/products" component={Product} />
        <Route to="/about" component={About} />
        <Route to="/contact" component={Contact} />
        


      </Routes>
       <Footer/>
    </>
  );
}

export default App;
