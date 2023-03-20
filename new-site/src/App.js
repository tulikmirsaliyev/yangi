
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Productis from './components/Productis';
import { Routes,Route, } from 'react-router-dom'
import CatBtn from './components/buttons/CatBtn';
import Error from './components/Error';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    
    <>
      <Header />
      <Routes>
        <Route  path="/"  exact element={<Home/>} />
        <Route  path="products" element={<Product/>} />
        <Route  path="/products/:id" element={<Productis/>} />
        <Route  path="/about"  element={<About/>} />
        <Route path="/contact"  element={<Contact/>} />
        <Route path="/CatBtn" element={<CatBtn/>}/>
        <Route path="*" element={<Error/>} />

        
      </Routes>
      
      <Footer />
    </>
    
    
      
    
  );
}

export default App;
