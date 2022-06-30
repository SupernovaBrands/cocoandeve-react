import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './UI/layout/Layout';

// import QuantityBox from '../components/QuantityBox';
// import Survey from './UI/templates/Survey';
// import TanRange from "./UI/templates/TanRange";
// import ProductDetail from "./UI/templates/ProductDetail";

const ProductDetail = lazy(() => import('./UI/templates/ProductDetail'));
const TanRange = lazy(() => import('./UI/templates/TanRange'));
const HairRange = lazy(() => import('./UI/templates/HairRange'));
const Survey = lazy(() => import('./UI/templates/Survey'));

const App = () => {
  const noHeader = () => window.location.pathname === '/customers-survey' || window.location.pathname === '/customers-survey/';
  const noFooter = () => window.location.pathname === '/customers-survey' || window.location.pathname === '/customers-survey/';

  return (
    <Layout noFooter={noFooter()} noHeader={noHeader()}>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path='/range-tan' element={<TanRange />} />
          <Route path='/range-tan-test' element={<TanRange />} />
          <Route path='/sunny-honey-bali-bronzing-self-tan' element={<ProductDetail handle="sunny-honey-bali-bronzing-self-tan-set" range="tan" />} />
          <Route path='/sunny-honey-bali-bronzing-self-tan-set' element={<Navigate replace to="/sunny-honey-bali-bronzing-self-tan" />} />
          <Route path='/tan-range' element={<Navigate replace to="/range-tan" />} />
          <Route path='/customers-survey' element={<Survey />} />
          <Route path='/test-pdp' element={<ProductDetail />} />
          <Route path='/hair-range-test' element={<HairRange />} />
          <Route path='/deep-conditioning-bundle-test' element={<ProductDetail handle="deep-condition-bundle" range="hair" />} />
        </Routes>
      </Suspense>
    </Layout>
  )
};
export default App;
