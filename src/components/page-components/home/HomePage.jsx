import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

export default function HomePage({ storeData, purchases, error, loading }) {
  // temporary random 'feature' pick
  // turn this into a user-behavior-dependant algorithm-based selection
  const featuredProduct = storeData
    ? storeData[Math.floor(Math.random() * storeData.length)]
    : null;

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.hero}>
        <div className={styles.sectionContent}>
          <h2>Damn Good Coffee.</h2>
          <p>
            Little Coffee thinks we don't want you to know about their little
            hacks. Yes, that's a confusing sentence - read it again. Truth is,
            no one has even seen anyone from Little Coffee bootstrap a React
            SPA.
          </p>
          <Link to="/products" className={styles.homeProductsLink}>
            See All Products
          </Link>
        </div>
        <img
          src="/coffee-logo.svg"
          alt="coffee logo"
          className={styles.homeImage}
        />
      </div>
      {storeData ? (
        <div className={styles.feature}>
          <img
            src={featuredProduct.image_url}
            alt="featured coffee product"
            className={styles.homeImageFeature}
          />
          <div className={styles.sectionContent}>
            <h2>Featured Product</h2>
            <p className={styles.featureName}>{featuredProduct.name}</p>
            <p>
              <span className={styles.featureBolded}>Description: </span>
              {featuredProduct.description.split('.')[0] + '.'}
            </p>
            <p>
              <span className={styles.featureBolded}>Flavor Profile: </span>
              {featuredProduct.flavor_profile.toString().replaceAll(',', ', ')}
            </p>
            <p>
              <span className={styles.featureBolded}>Region: </span>
              {featuredProduct.region}
            </p>
            <Link
              to={`/products/${featuredProduct.id}`}
              className={styles.homeProductsLink}
            >
              See This Product
            </Link>
          </div>
        </div>
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
        <div className={styles.skeleton}></div>
      )}
      <div className={styles.contact}>
        <div className={styles.sectionContent}>
          <h2>Get in Contact</h2>
          <p>
            There's only one thing we do better than coffee here, and that's
            making good deals happen.
          </p>
          <p>
            <span className={styles.featureBolded}>email: </span>
            contact@bigcoffee.com
          </p>
          <p>
            <span className={styles.featureBolded}>phone: </span>
            (+1) 905-123-4567
          </p>
          <p>
            <span className={styles.featureBolded}>carrier pidgeon: </span>
            Kingdom of the Java Jive
          </p>
        </div>
        <img
          src="/contact-logo.svg"
          alt="contact logo"
          className={styles.contactImage}
        />
      </div>
    </div>
  );
}
