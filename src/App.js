import React from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from './UI/layout/Layout';
import TanRange from "./UI/templates/TanRange";
import ProductDetail from "./UI/templates/ProductDetail";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/tan-range' element={<TanRange />} />
        <Route path='/products/:handle' element={<ProductDetail />} />
        <Route path='/sunny-honey-bali-bronzing-self-tan-set' element={<ProductDetail />} />
      </Routes>
    </Layout>
  )
};
export default App;
