import { useState } from 'react';
import { useParams, useOutletContext, Navigate } from 'react-router-dom';

import styles from './ProductItemPage.module.css';

export default function ProductItemPage() {
  const { id } = useParams();
  const [storeData, error, loading, handleAddToCart] = useOutletContext();

  const [amount, setAmount] = useState(1);

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleAddButton(e) {
    setAmount(1);
    handleAddToCart(
      String(e.target.getAttribute('data-id')),
      Number(e.target.getAttribute('data-amount')),
    );
  }

  // throw error if url param is not an int [1-20]
  if (isNaN(Number(id)) || Number(id) < 1 || Number(id) > 20) {
    return <Navigate to={'/error'} />;
  }

  // determine product to show from url param
  let productObj;
  if (storeData) {
    storeData.forEach((product) => {
      if (product.id === Number(id)) {
        productObj = product;
      }
    });
  }

  // determine roast text
  let roast;
  if (storeData) {
    if (productObj.roast_level === 1) {
      roast = 'Extra-Light Roast';
    }
    if (productObj.roast_level === 2) {
      roast = 'Light Roast';
    }
    if (productObj.roast_level === 3) {
      roast = 'Medium Roast';
    }
    if (productObj.roast_level === 4) {
      roast = 'Dark Roast';
    }
    if (productObj.roast_level === 5) {
      roast = 'Extra-Dark Roast';
    }
  }

  return (
    <div className={styles.productContainer}>
      {loading ? (
        <>
          <div className={styles.skeleton}></div>
          <div className={styles.skeleton}></div>
        </>
      ) : Boolean(error) ? (
        <div className={styles.error}>
          <div>
            <h3>Network Error:</h3>
            <p>
              Could not connect to API. Check your network connection or check
              the fetch URL.
            </p>
          </div>
        </div>
      ) : (
        <>
          <img src={productObj.image_url} alt="product" />
          <div className={styles.productContent}>
            <h2>{productObj.name}</h2>
            <p>
              <span>Description: </span>
              {productObj.description}
            </p>
            <p>
              <span>Flavor Profile: </span>
              {productObj.flavor_profile.toString().replaceAll(',', ', ')}
            </p>
            <p>
              <span>Region: </span>
              {productObj.region}
            </p>
            <p>
              <span>Roast Level: </span>
              {roast}
            </p>
            <p>
              <span>Price: </span>${productObj.price} / bag
            </p>
            <div className={styles.productActions}>
              <input
                type="number"
                name=""
                id=""
                value={amount}
                min={1}
                max={20}
                onChange={handleAmountChange}
                className={styles.productAmountInput}
              />
              <button
                type="button"
                className={styles.productAddCart}
                onClick={handleAddButton}
                data-id={productObj.id}
                data-amount={amount}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
