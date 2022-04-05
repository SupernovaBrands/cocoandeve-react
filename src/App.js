import React from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from './UI/layout/Layout';
import Survey from './UI/templates/Survey';

import TanRange from "./UI/templates/TanRange";
import ProductDetail from "./UI/templates/ProductDetail";

// const TanRange = lazy(() => import('./UI/templates/TanRange'));
// const ProductDetail = lazy(() => import('./UI/templates/ProductDetail'));

const App = () => {
  const noHeader = () => window.location.pathname === '/survey';
  const noFooter = () => window.location.pathname === '/survey'; 

  return (
    <Layout noFooter={noFooter()} noHeader={noHeader()}>
        <Routes>
          <Route path='/tan-range' element={<TanRange />} />
          <Route path='/products/:handle' element={<ProductDetail />} />
          <Route path='/sunny-honey-bali-bronzing-self-tan-set' element={<ProductDetail />} />
          <Route path='/survey' element={<Survey />} />
        </Routes>
    </Layout>
  )
};
export default App;
