import React, { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from './UI/layout/Layout';
import Survey from './UI/templates/Survey';

// import TanRange from "./UI/templates/TanRange";
// import ProductDetail from "./UI/templates/ProductDetail";

const TanRange = lazy(() => import('./UI/templates/TanRange'));
const ProductDetail = lazy(() => import('./UI/templates/ProductDetail'));

const App = () => {
  const noHeader = () => window.location.pathname === '/survey';
  const noFooter = () => window.location.pathname === '/survey'; 

  return (
    <Layout noFooter={noFooter()} noHeader={noHeader()}>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path='/tan-range' element={<TanRange />} />
          <Route path='/1-tan-range' element={<TanRange />} />
          <Route path='/products/:handle' element={<ProductDetail />} />
          <Route path='/sunny-honey-bali-bronzing-self-tan-set' element={<ProductDetail />} />
          <Route path='/1-sunny-honey-bali-bronzing-self-tan-set' element={<ProductDetail />} />
          <Route path='/survey' element={<Survey />} />
        </Routes>
      </Suspense>
    </Layout>
  )
};
export default App;
