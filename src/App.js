import React, { Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from './UI/layout/Layout';
// import TanRange from "./UI/templates/TanRange";
// import ProductDetail from "./UI/templates/ProductDetail";

const TanRange = lazy(() => import('./UI/templates/TanRange'));
const ProductDetail = lazy(() => import('./UI/templates/ProductDetail'));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/tan-range' element={<TanRange />} />
          <Route path='/products/:handle' element={<ProductDetail />} />
          <Route path='/sunny-honey-bali-bronzing-self-tan-set' element={<ProductDetail />} />
        </Routes>
      </Suspense>
    </Layout>
  )
};
export default App;
