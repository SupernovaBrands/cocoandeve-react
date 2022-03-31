
import React, { Suspense, lazy } from "react";
import { Fragment } from 'react';
// import Footer from '../sections/Footer';
import Header from '../sections/Header';

const Footer = lazy(() => import('../sections/Footer'));

const Layout = (props) => {
  return (
    <Fragment>
        <Header />
        <main>{props.children}</main>
        <Suspense fallback={<div></div>}>
          <Footer />
        </Suspense>
    </Fragment>
  );
};

export default Layout;
