import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './containers/Header';
import './App.css';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

const App = () => {
  return (
    <>
      <BrowserRouter>        
      <Header />
        <Routes>
          <Route path="/" element={<ProductListing />}>
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route>404 Not Found</Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
