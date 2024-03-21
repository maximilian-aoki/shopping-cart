import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

// component import
import HomePage from '../home/HomePage';

// hook import
import useCoffeeFetch from '../../../custom-hooks/useCoffeeFetch';

// css import
import styles from './RootPage.module.css';

// check to local storage
// let userCount = 0;
// if (localStorage.getItem('count')) {
//   userCount = Number(localStorage.getItem('count'));
// }

export default function RootPage() {
  const { data, error, loading } = useCoffeeFetch();
  const location = useLocation();

  console.log(data);

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
      {location.pathname === '/' ? (
        <HomePage data={data} error={error} loading={loading} />
      ) : (
        <Outlet context={[data, error, loading]} />
      )}
      <hr />
    </>
  );
}
