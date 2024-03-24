import styles from './ProductCard.module.css';

export default function ProductCard({ product, onSelect }) {
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
      <p className={styles.productCost}>${product.price}</p>
      <div className={styles.productActions}>
        <input
          type="number"
          name=""
          id=""
          defaultValue={1}
          min={1}
          max={20}
          className={styles.productAmountInput}
        />
        <button type="button" className={styles.productAddCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
