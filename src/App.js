import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/CartPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <div className="app">
        <Navbar />
        <Routes>
        <Route exact path="/" element={<ProductCard/>} />
        <Route path="/cart" element={<CartPage />} />
        </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
