import { useState } from 'react';

import styles from './CartItemCard.module.css';

export default function CartItemCard({
  product,
  amount,
  onRemove,
  onChangeAmount,
}) {
  return (
    <div className={styles.cartCard}>
      <div className={styles.cartCardItem}>
        <img src={product.image_url} alt="product image" />
        <p>{product.name}</p>
      </div>
      <div>
        <p>${product.price} / bag</p>
      </div>
      <div>
        <input
          type="number"
          value={amount}
          onChange={onChangeAmount}
          data-id={product.id}
          min={1}
          max={20}
        />
      </div>
      <div>
        <p>${product.price * amount}</p>
      </div>
      <div>
        <button type="button" data-id={product.id} onClick={onRemove}></button>
      </div>
    </div>
  );
}
