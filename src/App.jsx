import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import CarouselPage from './components/CarouselPage';
import Footer from './components/Footer';

export const cartContext = createContext();
const App = () => {
   const [cart, setCart] = useState([])
  return (
    <div>
      <cartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Navbar />

          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cartPage" element={<CartPage />} />
            </Routes>
          </div>
        </BrowserRouter>
        <br />
        <Footer />
      </cartContext.Provider>
    </div>
  );
};

export default App;