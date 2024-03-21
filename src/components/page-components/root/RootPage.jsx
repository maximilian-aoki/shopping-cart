import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

import HomePage from '../home/HomePage';

import styles from './RootPage.module.css';

export default function RootPage() {
  const location = useLocation();

  return (
    <>
      <h1>Root Component</h1>
      <hr />
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/error">Error</Link>
      <Link to="/order-confirmed">Order Confirmed</Link>
      <hr />
      {location.pathname === '/' ? <HomePage /> : <Outlet />}
    </>
  );
}
