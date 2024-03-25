import { useOutletContext } from 'react-router-dom';

import CartItemCard from '../../library-components/cart-item-card/CartItemCard';

import styles from './CartPage.module.css';

export default function CartPage() {
  const [
    storeData,
    error,
    loading,
    handleAddToCart,
    cart,
    handleRemoveFromCart,
    handleChangeCartAmount,
  ] = useOutletContext();

  return (
    <div className={styles.cartContainer}>
      <h2>Shopping Cart</h2>
      <div className={styles.cartLabels}>
        <p>Item</p>
        <p>Price</p>
        <p>Qty</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      {!storeData ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.cartItems}>
          {Object.keys(cart).map((id) => {
            return (
              <CartItemCard
                key={id}
                product={storeData[Number(id) - 1]}
                amount={cart[id]}
                onRemove={handleRemoveFromCart}
                onChangeAmount={handleChangeCartAmount}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
