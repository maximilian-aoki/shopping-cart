import { useRouteError } from 'react-router-dom';

import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <h1>{error.statusText || error.message}</h1>
    </>
  );
}
