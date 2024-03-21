import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

// component import
import HomePage from '../home/HomePage';

// css import
import styles from './RootPage.module.css';

// check to local storage
let userCount = 0;
if (localStorage.getItem('count')) {
  userCount = Number(localStorage.getItem('count'));
}

export default function RootPage() {
  const [count, setCount] = useState(userCount);
  const location = useLocation();

  function handleClick() {
    setCount(count + 1);
    localStorage.setItem('count', count + 1);
  }

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
        <HomePage count={count} />
      ) : (
        <Outlet context={[count]} />
      )}
      <hr />
      <p>count: {count}</p>
      <button type="button" onClick={handleClick}>
        Add Count
      </button>
    </>
  );
}
