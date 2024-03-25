import { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

import ProductCard from '../../library-components/product-card/ProductCard';

import styles from './ProductsPage.module.css';

export default function ProductsPage() {
  const [storeData, error, loading, handleAddToCart] = useOutletContext();

  const [sortValue, setSortValue] = useState('default');
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  // create array of products to show based on filter/sort
  let filteredStoreData = storeData;
  if (storeData) {
    // first check if there's a sort
    if (sortValue !== 'default') {
      filteredStoreData = storeData.toSorted((a, b) =>
        a[sortValue] < b[sortValue] ? -1 : 1,
      );
    }
    // then check if there's a search filter
    if (searchValue.trim() !== '') {
      const searchTest = searchValue.trim().toLowerCase();
      filteredStoreData = filteredStoreData.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchTest) ||
          (product.description.split('.')[0] + '.')
            .toLowerCase()
            .includes(searchTest)
        );
      });
    }
  }

  function handleProductSelect(e) {
    const productId = e.target.closest('div').getAttribute('data-id');
    navigate(`/products/${productId}`);
  }

  function handleSearch(e) {
    setSearchValue(e.target.value);
  }

  function handleSort(e) {
    setSortValue(e.target.value);
  }

  return (
    <div className={styles.productsContainer}>
      <h2>Our Products</h2>
      <div className={styles.filterOptions}>
        <div className={styles.filterOptionContainer}>
          <img src="/search-logo.svg" alt="search logo" />
          <input
            type="text"
            className={styles.filterSearch}
            placeholder="Search by name/description.."
            value={searchValue}
            onChange={handleSearch}
            maxLength={24}
          />
        </div>
        <div className={styles.filterOptionContainer}>
          <img src="/filter-logo.svg" alt="filter logo" />
          <select
            name=""
            id=""
            value={sortValue}
            className={styles.filterSelect}
            onChange={handleSort}
          >
            <option value="default">Default</option>
            <option value="price">💲 Price</option>
            <option value="roast_level">☕ Roast Level</option>
          </select>
        </div>
      </div>
      <div className={styles.productListFrame}>
        {!storeData ? (
          <div className={styles.skeleton}></div>
        ) : (
          filteredStoreData.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={handleProductSelect}
                onAddToCart={handleAddToCart}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
