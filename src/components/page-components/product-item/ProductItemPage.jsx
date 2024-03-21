import { useParams } from 'react-router-dom';

import styles from './ProductItemPage.module.css';

export default function ProductItemPage() {
  const { id } = useParams();

  return (
    <>
      <h2>Product: {id}</h2>
    </>
  );
}
