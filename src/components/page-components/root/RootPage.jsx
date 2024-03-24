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
  const { storeData, error, loading } = useCoffeeFetch();
  const location = useLocation();

  console.log(storeData);

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
              <p>0</p>
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
            <Outlet context={[storeData, error, loading]} />
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
