import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

// component import
import HomePage from '../home/HomePage';

// hook import
import useCoffeeFetch from '../../../custom-hooks/useCoffeeFetch';

// css import
import styles from './RootPage.module.css';

// check to local storage
let userCart = {};
if (localStorage.getItem('cart')) {
  userCart = JSON.parse(localStorage.getItem('cart'));
}

export default function RootPage() {
  const { storeData, error, loading } = useCoffeeFetch();
  const location = useLocation();

  const [cart, setCart] = useState(userCart);
  console.log(cart);

  function handleAddToCart(id, amount) {
    const cartCopy = { ...cart };
    cartCopy[id] = cartCopy.hasOwnProperty(id) ? cartCopy[id] + amount : amount;

    setCart(cartCopy);
    localStorage.setItem('cart', JSON.stringify(cartCopy));
  }

  return (
    <div className={styles.appContainer}>
      <header className={styles.headerContainer}>
        <div className={styles.header}>
          <h1 className={styles.headerContent}>Big Coffee.</h1>
        </div>
        <nav className={styles.navigationContainer}>
          <Link
            to="/"
            className={
              location.pathname === '/'
                ? styles.navLinkActive
                : styles.navLinkInactive
            }
          >
            Home
          </Link>
          <Link
            to="/products"
            className={
              /^\/products(\/)?(([1-9]|1[0-9]|20))?$/.test(location.pathname)
                ? styles.navLinkActive
                : styles.navLinkInactive
            }
          >
            Products
          </Link>
          <Link
            to="/cart"
            className={
              location.pathname === '/cart'
                ? styles.navLinkActive
                : styles.navLinkInactive
            }
          >
            <p>Cart</p>
            <div className={styles.navCartCount}>
              <p>
                {Object.keys(cart).reduce((prev, current) => {
                  return prev + cart[current];
                }, 0)}
              </p>
            </div>
          </Link>
        </nav>
      </header>
      <main className={styles.contentSpace}>
        <div></div>
        <div className={styles.contentContainer}>
          {location.pathname === '/' ? (
            <HomePage storeData={storeData} error={error} loading={loading} />
          ) : (
            <Outlet context={[storeData, error, loading, handleAddToCart]} />
          )}
        </div>
        <div></div>
      </main>
      <footer className={styles.footer}>
        <p>2024 Copyright Maximilian Aoki</p>
      </footer>
    </div>
  );
}
