import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './UI/layout/Layout';
import YouthRevive from "./UI/templates/YouthRevive";
import SkinCare from "./UI/templates/SkinCare";

// import QuantityBox from '../components/QuantityBox';
// import Survey from './UI/templates/Survey';
// import TanRange from "./UI/templates/TanRange";
// import ProductDetail from "./UI/templates/ProductDetail";

const ProductDetail = lazy(() => import('./UI/templates/ProductDetail'));
const HairMaskAmazon = lazy(() => import('./UI/templates/HairMaskAmazon'));
const TanRange = lazy(() => import('./UI/templates/TanRange'));
const HairRange = lazy(() => import('./UI/templates/HairRange'));
const Survey = lazy(() => import('./UI/templates/Survey'));
const AmazonHairRange = lazy(() => import('./UI/templates/AmazonHairRange'));
const AmazonTanRange = lazy(() => import('./UI/templates/AmazonTanRange'));

const App = () => {
  const noHeader = () => window.location.pathname === '/customers-survey' || window.location.pathname === '/customers-survey/';
  const noFooter = () => window.location.pathname === '/customers-survey' || window.location.pathname === '/customers-survey/'
    || window.location.pathname === '/range-youth-revive' || window.location.pathname === '/range-youth-revive/'
    || window.location.pathname === '/range-skincare' || window.location.pathname === '/range-skincare/';
  const timerBar = () => window.location.pathname === '/range-hair-amazon' || window.location.pathname === '/range-hair-amazon/'
    || window.location.pathname === '/range-tan-amazon' || window.location.pathname === '/range-tan-amazon/' || window.location.pathname === '/amazon/tan-range' || window.location.pathname === '/amazon/hair-range';

  return (
    <Layout noFooter={noFooter()} noHeader={noHeader()} timerBar={timerBar()}>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path='/range-tan' element={<TanRange />} />
          <Route path='/range-tan-test' element={<TanRange />} />
          <Route path='/sunny-honey-bali-bronzing-self-tan' element={<ProductDetail handle="sunny-honey-bali-bronzing-self-tan-set" range="tan" />} />
          <Route path='/sunny-honey-bali-bronzing-self-tan-set' element={<Navigate replace to="/sunny-honey-bali-bronzing-self-tan" />} />
          <Route path='/tan-range' element={<Navigate replace to="/range-tan" />} />
          <Route path='/customers-survey' element={<Survey />} />
          <Route path='/range-hair' element={<HairRange />} />
          <Route path='/deep-conditioning-bundle' element={<ProductDetail handle="deep-condition-bundle" range="hair" />} />
          <Route path='/repairing-restoring-hair-mask' element={<ProductDetail handle="repairing-restoring-hair-mask" range="hair" />} />
          <Route path='/shampoo-conditioner-set' element={<ProductDetail handle="shampoo-conditioner-set" range="hair" />} />
          <Route path='/super-nourishing-coconut-fig-hair-masque' element={<ProductDetail handle="super-nourishing-coconut-fig-hair-masque" range="hair" />} />
          <Route path='/hair-masque-amazon-us' element={<HairMaskAmazon />} />
          <Route path='/range-hair-amazon' element={<AmazonHairRange />} />
          <Route path='/range-tan-amazon' element={<AmazonTanRange />} />
          <Route path='/amazon/hair-range' element={<AmazonHairRange />} />
          <Route path='/amazon/tan-range' element={<AmazonTanRange />} />
          <Route path='/range-youth-revive' element={<YouthRevive />} />
          <Route path='/range-skincare' element={<SkinCare />} />
        </Routes>
      </Suspense>
    </Layout>
  )
};
export default App;
