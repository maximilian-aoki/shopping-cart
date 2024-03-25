import { useOutletContext } from 'react-router-dom';

import styles from './CartPage.module.css';

export default function CartPage() {
  const [storeData, error, loading, handleAddToCart, cart] = useOutletContext();

  return (
    <div className={styles.cartContainer}>
      <h2>Shopping Cart</h2>
      {Object.keys(cart).map((item) => {
        return (
          <p key={item}>
            id {item}: {cart[item]}
          </p>
        );
      })}
    </div>
  );
}
