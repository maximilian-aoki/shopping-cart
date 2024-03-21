import { useOutletContext } from 'react-router-dom';

import styles from './ProductsPage.module.css';

export default function ProductsPage() {
  const [count] = useOutletContext();

  return (
    <>
      <h1>Products: {count}</h1>
    </>
  );
}
