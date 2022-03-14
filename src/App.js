import React from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Homepage from "./pages/Homepage";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products/:handle' element={<ProductDetail />} />
      </Routes>
    </Layout>
  )
};
export default App;
