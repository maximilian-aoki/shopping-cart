import { useState } from 'react';

import styles from './ProductCard.module.css';

export default function ProductCard({ product, onSelect, onAddToCart }) {
  const [amount, setAmount] = useState(1);

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleAddButton(e) {
    e.stopPropagation();
    setAmount(1);

    onAddToCart(
      String(e.target.getAttribute('data-id')),
      Number(e.target.getAttribute('data-amount')),
    );
  }

  // determine roast text
  let roast;
  if (product.roast_level === 1) {
    roast = 'Extra-Light Roast';
  }
  if (product.roast_level === 2) {
    roast = 'Light Roast';
  }
  if (product.roast_level === 3) {
    roast = 'Medium Roast';
  }
  if (product.roast_level === 4) {
    roast = 'Dark Roast';
  }
  if (product.roast_level === 5) {
    roast = 'Extra-Dark Roast';
  }

  return (
    <div className={styles.productCard} data-id={product.id} onClick={onSelect}>
      <p className={styles.productRoast}>{roast}</p>
      <img src={product.image_url} alt="coffee product" />
      <h3>{product.name}</h3>
      <p className={styles.productDescription}>
        {product.description.split('.')[0] + '.'}
      </p>
      <p className={styles.productCost}>${product.price} / bag</p>
      <div className={styles.productActions}>
        <input
          type="number"
          name=""
          id=""
          value={amount}
          min={1}
          max={20}
          onClick={(e) => e.stopPropagation()}
          onChange={handleAmountChange}
          className={styles.productAmountInput}
        />
        <button
          type="button"
          className={styles.productAddCart}
          data-id={product.id}
          data-amount={amount}
          onClick={handleAddButton}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
