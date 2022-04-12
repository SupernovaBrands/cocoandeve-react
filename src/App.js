import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './UI/layout/Layout';
import RangeBanner from './UI/sections/RangeBanner';
import ProductForm from './UI/sections/ProductForm';


// import Survey from './UI/templates/Survey';
// import TanRange from "./UI/templates/TanRange";
// import ProductDetail from "./UI/templates/ProductDetail";

const ProductDetail = lazy(() => import('./UI/templates/ProductDetail'));
const TanRange = lazy(() => import('./UI/templates/TanRange'));
const Survey = lazy(() => import('./UI/templates/Survey'));

const App = () => {
  const noHeader = () => window.location.pathname === '/survey';
  const noFooter = () => window.location.pathname === '/survey';

  return (
    <Layout noFooter={noFooter()} noHeader={noHeader()}>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path='/products/:handle' element={<ProductDetail />} />
          <Route path='/sunny-honey-bali-bronzing-self-tan' element={<ProductDetail />} />
          <Route path='/sunny-honey-bali-bronzing-self-tan-set' element={<Navigate replace to="/sunny-honey-bali-bronzing-self-tan" />} />
          <Route path='/range-tan' element={<TanRange />} />
          <Route path='/range-tan-test' element={<TanRange />} />
          <Route path='/tan-range' element={<Navigate replace to="/range-tan" />} />
          <Route path='/survey' element={<Survey />} />
          <Route path='/page-survey' element={<Survey />} />
          <Route path='/test-pdp' element={<ProductDetail />} />

        </Routes>
      </Suspense>
    </Layout>
  )
};
export default App;
