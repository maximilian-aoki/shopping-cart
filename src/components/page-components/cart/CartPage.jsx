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
    handleCheckout,
  ] = useOutletContext();

  // calculate cart totals
  let preTotal, tax, total;
  if (storeData) {
    preTotal = Object.keys(cart).reduce((prev, current) => {
      return prev + storeData[Number(current) - 1].price * cart[current];
    }, 0);

    tax = (preTotal * 0.13).toFixed(2);

    total = (preTotal + Number(tax)).toFixed(2);
  }

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
      {loading ? (
        <div className={styles.skeleton}></div>
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
      ) : Object.keys(cart).length < 1 ? (
        <div className={styles.cartEmpty}>
          <p>No items in cart!</p>
        </div>
      ) : (
        <>
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
          {Object.keys(cart).length >= 1 && (
            <div className={styles.checkoutInfo}>
              <p>Pre-Total: ${preTotal}</p>
              <p>(+ Tax: ${tax})</p>
              <p className={styles.total}>Total: ${total}</p>
              <button
                type="button"
                data-cart={cart}
                className={styles.checkoutButton}
                onClick={() => {
                  handleCheckout(cart);
                }}
              >
                Check Out
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
