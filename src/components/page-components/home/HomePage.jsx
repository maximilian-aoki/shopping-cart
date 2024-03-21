import styles from './HomePage.module.css';

export default function HomePage({ data, error, loading }) {
  let message = <p>loading...</p>;
  if (Boolean(data)) {
    message = <p>data served</p>;
  }
  if (Boolean(error)) {
    message = <p>error!</p>;
  }

  return (
    <>
      <h2>Home Page</h2>
      {message}
    </>
  );
}
