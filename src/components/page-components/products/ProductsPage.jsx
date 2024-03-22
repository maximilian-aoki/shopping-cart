import { useOutletContext } from 'react-router-dom';

import styles from './ProductsPage.module.css';

export default function ProductsPage() {
  const [storeData, error, loading] = useOutletContext();

  let message = <p>loading...</p>;
  if (Boolean(storeData)) {
    message = (
      <ul>
        {storeData.map((productData) => {
          return <li key={productData.id}>{productData.name}</li>;
        })}
      </ul>
    );
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
