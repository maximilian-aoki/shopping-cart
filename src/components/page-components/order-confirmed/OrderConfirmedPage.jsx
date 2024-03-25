import styles from './OrderConfirmedPage.module.css';

export default function OrderConfirmedPage() {
  return (
    <div className={styles.confirmedContainer}>
      <h2>☕ Order Confirmed</h2>
      <p>
        Get ready to brew! some delicious products from Big Coffee are coming
        your way**
      </p>
      <p className={styles.terms}>
        **Actually this is a demo project so you should know two important
        things:
      </p>
      <p className={styles.terms}>
        First - you didn't actually order any products and we didn't take any of
        your money (even though that would be a SWEET deal for us).
      </p>
      <p className={styles.terms}>
        Second - this app uses localStorage to track your purchase history so we
        can (in the future) use a personalization algorithm to recommend a
        product you're more likely to 'buy'.
      </p>
    </div>
  );
}
