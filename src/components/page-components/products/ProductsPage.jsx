import { useOutletContext } from 'react-router-dom';

import styles from './ProductsPage.module.css';

export default function ProductsPage() {
  const [data, error, loading] = useOutletContext();

  let message = <p>loading...</p>;
  if (Boolean(data)) {
    message = <p>data served</p>;
  }
  if (Boolean(error)) {
    message = <p>error!</p>;
  }

  return (
    <>
      <h1>Products</h1>
      {message}
    </>
  );
}
